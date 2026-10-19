import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const authorization = req.headers.authorization;

  if (!authorization?.startsWith("Bearer ")) {
    return res.status(401).json({
      message: "Аввал ворид шавед.",
      code: "TOKEN_MISSING",
    });
  }

  if (!process.env.JWT_SECRET) {
    console.error("JWT_SECRET муайян нашудааст");

    return res.status(500).json({
      message: "Танзимоти амниятии сервер нодуруст аст.",
    });
  }

  try {
    const token = authorization.slice(7).trim();
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (
      !decoded ||
      typeof decoded !== "object" ||
      !decoded.id ||
      !decoded.role
    ) {
      console.error("ADMIN TOKEN PAYLOAD INVALID:", {
        hasId: Boolean(decoded?.id),
        hasRole: Boolean(decoded?.role),
      });

      return res.status(401).json({
        message: "Маълумоти токен нопурра аст. Аз нав ворид шавед.",
        code: "TOKEN_PAYLOAD_INVALID",
      });
    }

    req.admin = {
      ...decoded,
      id: String(decoded.id),
    };

    next();
  } catch (error) {
    console.error("ADMIN TOKEN ERROR:", error.message);

    return res.status(401).json({
      message: "Токен нодуруст аст ё муҳлати он гузаштааст.",
      code: "TOKEN_INVALID",
    });
  }
};

export const adminMiddleware = (req, res, next) => {
  if (!req.admin) {
    return res.status(401).json({
      message: "Аввал ворид шавед.",
      code: "ADMIN_NOT_AUTHENTICATED",
    });
  }

  if (req.admin.role !== "admin") {
    return res.status(403).json({
      message: "Шумо иҷозати дастрасӣ ба Admin Panel-ро надоред.",
      code: "ADMIN_ACCESS_DENIED",
    });
  }

  next();
};