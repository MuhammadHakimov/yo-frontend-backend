import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { pool } from "../config/db.js";

const getLevelFromTest = (percentage) => {
  if (percentage < 40) return "Beginner";
  if (percentage < 60) return "Junior";
  if (percentage < 80) return "Middle";
  return "Senior";
};

const removePassword = (user) => {
  const { password, ...userWithoutPassword } = user;
  return userWithoutPassword;
};

const normalizeEmail = (email) => email.trim().toLowerCase();

export const registerUserController = async (req, res) => {
  try {
    const { name, surename, email, password, password2 } = req.body;

    if (!name || !surename || !email || !password) {
      return res.status(400).json({
        message: "Ҳамаи майдонҳои заруриро пур кунед.",
      });
    }

    if (password2 !== undefined && password !== password2) {
      return res.status(400).json({
        message: "Паролҳо мувофиқат намекунанд.",
      });
    }

    if (password.length < 8) {
      return res.status(400).json({
        message: "Парол бояд ҳадди ақал 8 аломат дошта бошад.",
      });
    }

    const normalizedEmail = normalizeEmail(email);
    const existingUser = await pool.query(
      "SELECT id FROM users WHERE LOWER(email) = $1",
      [normalizedEmail],
    );

    if (existingUser.rows.length > 0) {
      return res.status(409).json({
        message: "Ин почтаи электронӣ аллакай истифода мешавад.",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const id = Date.now().toString();

    const result = await pool.query(
      `INSERT INTO users
    (id, name, surename, email, password, xp, level, role, mistakes, history)
   VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9::jsonb, $10::jsonb)
   RETURNING *`,
      [
        id,
        name.trim(),
        surename.trim(),
        normalizedEmail,
        hashedPassword,
        0,
        "Beginner",
        "user",
        JSON.stringify([]),
        JSON.stringify([]),
      ],
    );

    return res.status(201).json({
      message: "Сабти ном бомуваффақият анҷом ёфт.",
      user: removePassword(result.rows[0]),
    });
  } catch (error) {
    console.error("Register error:", error);

    if (error.code === "23505") {
      return res.status(409).json({
        message: "Ин почтаи электронӣ аллакай истифода мешавад.",
      });
    }

    return res.status(500).json({
      message: "Ҳангоми сабти ном хато рух дод.",
    });
  }
};

export const loginUserController = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Email ва паролро ворид кунед.",
      });
    }

    const result = await pool.query(
      "SELECT * FROM users WHERE LOWER(email) = $1 LIMIT 1",
      [normalizeEmail(email)],
    );

    const user = result.rows[0];

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({
        message: "Email ё парол нодуруст аст.",
      });
    }

    if (!process.env.JWT_SECRET) {
      throw new Error("JWT_SECRET муайян нашудааст.");
    }

    const token = jwt.sign(
      {
        id: String(user.id),
        email: user.email,
        role: user.role,
      },
      process.env.JWT_SECRET,
      { expiresIn: "7d" },
    );

    return res.status(200).json({
      message: "Воридшавӣ бомуваффақият анҷом ёфт.",
      token,
      user: removePassword(user),
    });
  } catch (error) {
    console.error("Login error:", error);

    return res.status(500).json({
      message: "Ҳангоми воридшавӣ хато рух дод.",
    });
  }
};

export const getUserController = async (req, res) => {
  try {
    const { email } = req.query;

    if (!email) {
      return res.status(400).json({
        message: "Email муайян нашудааст.",
      });
    }

    const result = await pool.query(
      "SELECT * FROM users WHERE LOWER(email) = $1 LIMIT 1",
      [normalizeEmail(email)],
    );

    if (!result.rows[0]) {
      return res.status(404).json({
        message: "Корбар ёфт нашуд.",
      });
    }

    return res.status(200).json({
      user: removePassword(result.rows[0]),
    });
  } catch (error) {
    console.error("Get user error:", error);

    return res.status(500).json({
      message: "Гирифтани маълумоти корбар ноком шуд.",
    });
  }
};

export const getUserByIdController = async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM users WHERE id = $1 LIMIT 1",
      [String(req.params.id)],
    );

    if (!result.rows[0]) {
      return res.status(404).json({
        message: "Корбар ёфт нашуд.",
      });
    }

    return res.status(200).json({
      user: removePassword(result.rows[0]),
    });
  } catch (error) {
    console.error("Get user by ID error:", error);

    return res.status(500).json({
      message: "Гирифтани маълумоти корбар ноком шуд.",
    });
  }
};

export const addXpController = async (req, res) => {
  try {
    const { email, xp } = req.body;

    if (!email || !Number.isSafeInteger(xp) || xp <= 0 || xp > 1000) {
      return res.status(400).json({
        message: "Маълумоти XP нодуруст аст.",
      });
    }

    const result = await pool.query(
      `UPDATE users
       SET xp = COALESCE(xp, 0) + $1,
           level = CASE
             WHEN COALESCE(xp, 0) + $1 < 1500 THEN 'Beginner'
             WHEN COALESCE(xp, 0) + $1 < 3100 THEN 'Junior'
             WHEN COALESCE(xp, 0) + $1 < 4700 THEN 'Middle'
             ELSE 'Senior'
           END
       WHERE LOWER(email) = $2
       RETURNING xp, level`,
      [xp, normalizeEmail(email)],
    );

    if (!result.rows[0]) {
      return res.status(404).json({
        message: "Корбар ёфт нашуд.",
      });
    }

    return res.status(200).json({
      message: "XP илова шуд.",
      xp: result.rows[0].xp,
      level: result.rows[0].level,
    });
  } catch (error) {
    console.error("Add XP error:", error);

    return res.status(500).json({
      message: "Илова кардани XP ноком шуд.",
    });
  }
};

export const levelTestController = async (req, res) => {
  try {
    const { email, score, totalQuestions } = req.body;

    if (
      !email ||
      !Number.isInteger(score) ||
      !Number.isInteger(totalQuestions) ||
      totalQuestions <= 0 ||
      totalQuestions > 100 ||
      score < 0 ||
      score > totalQuestions
    ) {
      return res.status(400).json({
        message: "Маълумоти тест нодуруст аст.",
      });
    }

    const percentage = (score / totalQuestions) * 100;
    const level = getLevelFromTest(percentage);

    const result = await pool.query(
      `UPDATE users
       SET level = $1
       WHERE LOWER(email) = $2
       RETURNING id`,
      [level, normalizeEmail(email)],
    );

    if (!result.rows[0]) {
      return res.status(404).json({
        message: "Корбар ёфт нашуд.",
      });
    }

    return res.status(200).json({
      message: "Сатҳи корбар муайян карда шуд.",
      level,
      score,
      totalQuestions,
      percentage: Math.round(percentage),
    });
  } catch (error) {
    console.error("Level test error:", error);

    return res.status(500).json({
      message: "Муайян кардани сатҳи корбар ноком шуд.",
    });
  }
};

export const getMistakesController = async (req, res) => {
  try {
    const { email } = req.query;

    if (!email) {
      return res.status(400).json({
        message: "Email муайян нашудааст.",
      });
    }

    const result = await pool.query(
      "SELECT mistakes FROM users WHERE LOWER(email) = $1 LIMIT 1",
      [normalizeEmail(email)],
    );

    if (!result.rows[0]) {
      return res.status(404).json({
        message: "Корбар ёфт нашуд.",
      });
    }

    return res.status(200).json({
      mistakes: result.rows[0].mistakes || [],
    });
  } catch (error) {
    console.error("Get mistakes error:", error);

    return res.status(500).json({
      message: "Гирифтани хатогиҳо ноком шуд.",
    });
  }
};

export const saveMistakesController = async (req, res) => {
  try {
    const { email, mistakes } = req.body;

    if (!email || !Array.isArray(mistakes)) {
      return res.status(400).json({
        message: "Маълумоти хатогиҳо нодуруст аст.",
      });
    }

    const result = await pool.query(
      `UPDATE users
       SET mistakes = $1::jsonb
       WHERE LOWER(email) = $2
       RETURNING mistakes`,
      [JSON.stringify(mistakes), normalizeEmail(email)],
    );

    if (!result.rows[0]) {
      return res.status(404).json({
        message: "Корбар ёфт нашуд.",
      });
    }

    return res.status(200).json({
      message: "Хатогиҳо сабт шуданд.",
      mistakes: result.rows[0].mistakes || [],
    });
  } catch (error) {
    console.error("Save mistakes error:", error);

    return res.status(500).json({
      message: "Сабти хатогиҳо ноком шуд.",
    });
  }
};

export const deleteUserController = async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT role FROM users WHERE id = $1 LIMIT 1",
      [String(req.params.id)],
    );

    const user = result.rows[0];

    if (!user) {
      return res.status(404).json({
        message: "Корбар ёфт нашуд.",
      });
    }

    if (user.role === "admin") {
      return res.status(403).json({
        message: "Нест кардани ҳисоби администратор иҷозат дода намешавад.",
      });
    }

    await pool.query("DELETE FROM users WHERE id = $1", [
      String(req.params.id),
    ]);

    return res.status(200).json({
      message: "Корбар нест карда шуд.",
    });
  } catch (error) {
    console.error("Delete user error:", error);

    return res.status(500).json({
      message: "Нест кардани корбар ноком шуд.",
    });
  }
};
