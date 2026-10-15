// Подготовка базы: создаёт таблицу users, при пустой таблице переносит
// пользователей из data/users.json, а если заданы ADMIN_EMAIL и ADMIN_PASSWORD —
// создаёт администратора или обновляет его пароль.
// Запускается автоматически из start.js; вручную: node scripts/init-db.js
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import bcrypt from "bcryptjs";
import { pool } from "../config/db.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export async function initDb() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS users (
      id       TEXT PRIMARY KEY,
      name     TEXT NOT NULL DEFAULT '',
      surename TEXT NOT NULL DEFAULT '',
      email    TEXT NOT NULL,
      password TEXT NOT NULL,
      img      TEXT NOT NULL DEFAULT '',
      xp       INTEGER NOT NULL DEFAULT 0,
      level    TEXT NOT NULL DEFAULT 'Beginner',
      role     TEXT NOT NULL DEFAULT 'user',
      mistakes JSONB NOT NULL DEFAULT '[]'::jsonb,
      history  JSONB NOT NULL DEFAULT '[]'::jsonb
    )
  `);
  await pool.query(
    "CREATE UNIQUE INDEX IF NOT EXISTS users_email_lower_idx ON users (LOWER(email))",
  );

  const { rows } = await pool.query("SELECT COUNT(*)::int AS count FROM users");
  const seedFile = path.join(__dirname, "../data/users.json");

  if (rows[0].count === 0 && fs.existsSync(seedFile)) {
    const users = JSON.parse(fs.readFileSync(seedFile, "utf-8"));

    for (const user of users) {
      await pool.query(
        `INSERT INTO users (id, name, surename, email, password, img, xp, level, role, mistakes, history)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10::jsonb, $11::jsonb)
         ON CONFLICT DO NOTHING`,
        [
          String(user.id),
          user.name || "",
          user.surename || "",
          String(user.email).toLowerCase(),
          user.password,
          user.img || "",
          Number(user.xp) || 0,
          user.level || "Beginner",
          user.role || "user",
          JSON.stringify(user.mistakes || []),
          JSON.stringify(user.history || []),
        ],
      );
    }

    console.log(`DB: imported ${users.length} users from data/users.json`);
  }

  const adminEmail = process.env.ADMIN_EMAIL?.trim().toLowerCase();
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (adminEmail && adminPassword) {
    const hash = await bcrypt.hash(adminPassword, 12);
    const updated = await pool.query(
      "UPDATE users SET password = $1, role = 'admin' WHERE LOWER(email) = $2",
      [hash, adminEmail],
    );

    if (updated.rowCount === 0) {
      await pool.query(
        `INSERT INTO users (id, name, email, password, level, role)
         VALUES ($1, 'Admin', $2, $3, 'Admin', 'admin')`,
        [Date.now().toString(), adminEmail, hash],
      );
    }

    console.log(`DB: admin ${adminEmail} is set up`);
  }

  console.log("DB: ready");
}

if (process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1])) {
  initDb()
    .catch((error) => {
      console.error("DB init failed:", error);
      process.exitCode = 1;
    })
    .finally(() => pool.end());
}
