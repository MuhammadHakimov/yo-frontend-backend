import { pool } from "../config/db.js";

export const getUsers = async () => {
  const result = await pool.query(
    "SELECT * FROM users ORDER BY id"
  );
  return result.rows;
};
export const saveUsers = async (users) => {
  const client = await pool.connect();
  try {
    await client.query("BEGIN");

    for (const user of users) {
      const { id, ...fields } = user;

      if (id === undefined || id === null) {
        throw new Error("Ҳар як корбар бояд id дошта бошад");
      }

      const entries = Object.entries(fields);
      const columns = ["id", ...entries.map(([key]) => key)];

      if (
        columns.some(
          (column) =>
            !/^[a-zA-Z_][a-zA-Z0-9_]*$/.test(column)
        )
      ) {
        throw new Error("Номи сутуни корбар нодуруст аст");
      }

      const values = [
        String(id),
        ...entries.map(([, value]) =>
          value !== null && typeof value === "object"
            ? JSON.stringify(value)
            : value
        ),
      ];

      const placeholders = values.map(
        (_, index) => `$${index + 1}`
      );

      const updates = entries.map(
        ([key]) => `"${key}" = EXCLUDED."${key}"`
      );

      const sql = `
        INSERT INTO users (${columns.map((column) => `"${column}"`).join(", ")})
        VALUES (${placeholders.join(", ")})
        ON CONFLICT (id) DO UPDATE SET
        ${updates.length ? updates.join(", ") : '"id" = EXCLUDED."id"'}
      `;

      await client.query(sql, values);
    }

    await client.query("COMMIT");
  } catch (error) {
    await client.query("ROLLBACK");
    throw error;
  } finally {
    client.release();
  }
};