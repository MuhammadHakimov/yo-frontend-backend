import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const historyFile = path.join(
  __dirname,
  "../data/testHistory.json"
);

function getHistory() {
  try {
    console.log("📂 HISTORY FILE:", historyFile);

    if (!fs.existsSync(historyFile)) {
      console.log("⚠️ testHistory.json вуҷуд надорад. Сохта мешавад...");
      fs.writeFileSync(historyFile, "[]", "utf-8");
    }

    const data = fs.readFileSync(historyFile, "utf-8");
    console.log("📄 HISTORY FILE CONTENT:", data);

    if (!data.trim()) {
      console.log("⚠️ Файл холӣ буд. [] истифода мешавад.");
      return [];
    }

    const history = JSON.parse(data);

    if (!Array.isArray(history)) {
      console.error("❌ testHistory.json бояд array бошад!");
      return [];
    }

    return history;
  } catch (error) {
    console.error("❌ GET HISTORY FILE ERROR:", error);
    return [];
  }
}

function saveHistory(history) {
  try {
    fs.writeFileSync(
      historyFile,
      JSON.stringify(history, null, 2),
      "utf-8"
    );
    console.log("✅ HISTORY FILE SAVED");
  } catch (error) {
    console.error("❌ SAVE HISTORY FILE ERROR:", error);
    throw error;
  }
}

export const addTestHistoryController = (req, res) => {
  try {
    console.log("🔥 HISTORY REQUEST ARRIVED");
    console.log("BODY:", req.body);

    const {
      userId,
      testName,
      technology,
      score,
      totalQuestions,
      xp,
    } = req.body;

    if (!userId || !testName) {
      return res.status(400).json({
        message: "userId ва testName ҳатмӣ мебошанд",
      });
    }

    const history = getHistory();

    const newResult = {
      id: Date.now().toString(),
      userId: String(userId),
      testName,
      technology,
      score: Number(score) || 0,
      totalQuestions: Number(totalQuestions) || 0,
      xp: Number(xp) || 0,
      createdAt: new Date().toISOString(),
    };

    console.log("📝 NEW TEST RESULT:", newResult);

    history.push(newResult);
    saveHistory(history);

    console.log("✅ TEST HISTORY ADDED");

    return res.status(201).json({
      message: "Таърихи тест нигоҳ дошта шуд",
      result: newResult,
    });
  } catch (error) {
    console.error("❌ ADD TEST HISTORY ERROR:", error);
    return res.status(500).json({
      message: "Хатогӣ ҳангоми нигоҳ доштани таърихи тест",
      error: error.message,
    });
  }
};

export const getUserTestHistoryController = (req, res) => {
  try {
    const { userId } = req.params;

    if (!userId) {
      return res.status(400).json({
        message: "userId ҳатмӣ мебошад",
      });
    }

    const history = getHistory();

    const userHistory = history
      .filter((item) => String(item.userId) === String(userId))
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));


    return res.json({
      history: userHistory,
    });
  } catch (error) {
    console.error("❌ GET TEST HISTORY ERROR:", error);
    return res.status(500).json({
      message: "Хатогӣ ҳангоми гирифтани таърихи тест",
      error: error.message,
    });
  }
};

export const deleteTestHistory = async (req, res) => {
  try {
    const { id } = req.params;

    const history = getHistory();
    const index = history.findIndex(
      (item) => String(item.id) === String(id)
    );

    if (index === -1) {
      return res.status(404).json({
        message: "History not found",
      });
    }

    history.splice(index, 1);
    saveHistory(history);

    return res.json({
      message: "History deleted successfully",
    });
  } catch (error) {
    console.error("DELETE HISTORY ERROR:", error);
    return res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};