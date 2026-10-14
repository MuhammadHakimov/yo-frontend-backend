
import { pool } from "./back/config/db.js";

try {
  const result = await pool.query(
    `DELETE FROM users
     WHERE id::text = $1
       AND email = $2
       AND role = $3
     RETURNING id, email, role`,
    ["1791955305098", "muhammad@gmail.com", "admin"]
  );

  if (result.rowCount === 1) {
    console.log("Корбар нест карда шуд:", result.rows[0]);
  } else {
    console.log("Корбар ёфт нашуд. Ягон маълумот нест карда нашуд.");
  }
} catch (error) {
  console.error("ХАТО:", error.message);
} finally {
  await pool.end();
}
