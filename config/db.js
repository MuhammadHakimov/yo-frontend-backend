
import pg from "pg";
import "dotenv/config";

const { Pool } = pg;

// На Railway подключение берётся из DATABASE_URL (переменная сервиса PostgreSQL),
// локально — из DB_HOST / DB_PORT / DB_NAME / DB_PASSWORD, как раньше.
export const pool = process.env.DATABASE_URL
  ? new Pool({ connectionString: process.env.DATABASE_URL })
  : new Pool({
      host: process.env.DB_HOST || "localhost",
      port: Number(process.env.DB_PORT || 5432),
      database: process.env.DB_NAME || "yo_frontend",
      user: "postgres",
      password: process.env.DB_PASSWORD,
    });

pool.on("error", (error) => {
  console.error("PostgreSQL pool error:", error.message);
});
