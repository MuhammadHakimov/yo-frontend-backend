
import bcrypt from "bcryptjs";
import { randomUUID } from "node:crypto";
import { pool } from "../config/db.js";
import { sendVerificationCode } from "../services/emailService.js";

const verificationCodes = new Map();

export const sendCode = async (req, res) => {
  try {
    const { name, surename, email, password } = req.body || {};

    if (
      typeof name !== "string" ||
      !name.trim() ||
      typeof email !== "string" ||
      !email.trim() ||
      typeof password !== "string" ||
      !password
    ) {
      return res.status(400).json({
        message: "Ном, email ва парол ҳатмӣ мебошанд.",
      });
    }

    const normalizedEmail = email.trim().toLowerCase();

    const existingUser = await pool.query(
      "SELECT id FROM users WHERE LOWER(email) = $1 LIMIT 1",
      [normalizedEmail]
    );

    if (existingUser.rowCount > 0) {
      return res.status(409).json({
        message: "Ин email аллакай истифода шудааст.",
      });
    }

    const code = String(
      Math.floor(100000 + Math.random() * 900000)
    );

    await sendVerificationCode(normalizedEmail, code);

    verificationCodes.set(normalizedEmail, {
      code,
      name: name.trim(),
      surename:
        typeof surename === "string" ? surename.trim() : "",
      email: normalizedEmail,
      password,
      expires: Date.now() + 5 * 60 * 1000,
    });

    return res.status(200).json({
      message: "Код ба email фиристода шуд.",
    });
  } catch (error) {
    console.error("SEND CODE ERROR:", error);

    return res.status(500).json({
      message: "Код фиристода нашуд.",
    });
  }
};

export const verifyCode = async (req, res) => {
  try {
    const { email, code } = req.body || {};

    if (
      typeof email !== "string" ||
      !email.trim() ||
      code === undefined ||
      code === null
    ) {
      return res.status(400).json({
        message: "Email ва код ҳатмӣ мебошанд.",
      });
    }

    const normalizedEmail = email.trim().toLowerCase();
    const saved = verificationCodes.get(normalizedEmail);

    if (!saved) {
      return res.status(400).json({
        message: "Код ёфт нашуд. Лутфан, кодро аз нав дархост кунед.",
      });
    }

    if (Date.now() > saved.expires) {
      verificationCodes.delete(normalizedEmail);

      return res.status(400).json({
        message: "Муҳлати код ба охир расидааст.",
      });
    }

    if (saved.code !== String(code).trim()) {
      return res.status(400).json({
        message: "Код нодуруст аст.",
      });
    }

    const existingUser = await pool.query(
      "SELECT id FROM users WHERE LOWER(email) = $1 LIMIT 1",
      [normalizedEmail]
    );

    if (existingUser.rowCount > 0) {
      verificationCodes.delete(normalizedEmail);

      return res.status(409).json({
        message: "Ин email аллакай истифода шудааст.",
      });
    }

    const hashedPassword = await bcrypt.hash(saved.password, 10);

    const result = await pool.query(
      `INSERT INTO users (
        id,
        name,
        surename,
        email,
        password,
        img,
        xp,
        level,
        role
      )
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
      RETURNING id, name, surename, email, img, xp, level, role, mistakes, history`,
      [
        randomUUID(),
        saved.name,
        saved.surename,
        saved.email,
        hashedPassword,
        "",
        0,
        "Beginner",
        "user",
      ]
    );

    verificationCodes.delete(normalizedEmail);

    return res.status(201).json({
      message: "Email тасдиқ шуд ва аккаунт сохта шуд.",
      verified: true,
      user: result.rows[0],
    });
  } catch (error) {
    console.error("VERIFY CODE ERROR:", error);

    return res.status(500).json({
      message: "Ҳангоми тасдиқи email хато рӯй дод.",
    });
  }
};
