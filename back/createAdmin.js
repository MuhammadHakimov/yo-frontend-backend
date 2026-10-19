
import bcrypt from "bcryptjs";
import { pool } from "./config/db.js";
import "dotenv/config";

async function createAdmin() {
  const email = process.env.ADMIN_EMAIL;
  const password = process.env.ADMIN_PASSWORD;

  if (!email || !password) {
    throw new Error("ADMIN_EMAIL ва ADMIN_PASSWORD бояд дар .env бошанд.");
  }

  try {
    const existingAdmin = await pool.query(
      "SELECT id FROM users WHERE LOWER(email) = LOWER($1) LIMIT 1",
      [email],
    );

    if (existingAdmin.rows.length > 0) {
      console.log("Ин email аллакай дар база вуҷуд дорад.");
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    await pool.query(
      `INSERT INTO users
        (id, name, surename, email, password, img, xp, level, role, mistakes, history)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)`,
      [
        Date.now().toString(),
        "Admin",
        "",
        email.toLowerCase(),
        hashedPassword,
        "",
        0,
        "Admin",
        "admin",
        JSON.stringify([]),
        JSON.stringify([]),
      ],
    );

    console.log("Администратор дар PostgreSQL сохта шуд.");
    console.log("Email:", email);
  } finally {
    await pool.end();
  }
}

createAdmin().catch((error) => {
  console.error("Хатои сохтани администратор:", error.message);
  process.exitCode = 1;
});
