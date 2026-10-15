// Запуск на Railway: папка data хранится на постоянном диске (Volume),
// чтобы пользователи, XP и изменения из админки не пропадали при обновлениях.
// Локально (без Volume) просто запускает server.js.
// Если задан DATABASE_URL, перед запуском готовит базу (scripts/init-db.js).
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const volumePath = process.env.RAILWAY_VOLUME_MOUNT_PATH;

if (volumePath) {
  const appData = path.join(__dirname, "data");
  const marker = path.join(volumePath, ".seeded");

  // Первый запуск: копируем исходные данные на диск
  if (!fs.existsSync(marker)) {
    fs.cpSync(appData, volumePath, { recursive: true });
    fs.writeFileSync(
      path.join(volumePath, "package.json"),
      JSON.stringify({ type: "module" }),
    );
    fs.writeFileSync(marker, new Date().toISOString());
    console.log(`Data copied to volume: ${volumePath}`);
  }

  // Папка data в приложении указывает на диск
  fs.rmSync(appData, { recursive: true, force: true });
  fs.symlinkSync(volumePath, appData, process.platform === "win32" ? "junction" : "dir");
  console.log(`Using data from volume: ${volumePath}`);
}

// База PostgreSQL: таблица users и перенос пользователей (если подключена)
if (process.env.DATABASE_URL) {
  const { initDb } = await import("./scripts/init-db.js");
  await initDb();
}

await import("./server.js");
