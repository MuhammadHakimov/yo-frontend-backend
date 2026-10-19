import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const mistakesFile = path.join(__dirname, "../data/mistakes.json");

function getMistakes() {
  if (!fs.existsSync(mistakesFile)) {
    fs.writeFileSync(mistakesFile, "[]", "utf-8");
  }

  const data = fs.readFileSync(mistakesFile, "utf-8");

  return data.trim() ? JSON.parse(data) : [];
}

function saveMistakes(mistakes) {
  fs.writeFileSync(mistakesFile, JSON.stringify(mistakes, null, 2), "utf-8");
}

export const addMistakeController = (req, res) => {
  try {
    const {
      userId,
      technology,
      questionId,
      question,
      options,
      selectedAnswer,
      correctAnswer,
      answer,
      explanation,
    } = req.body;

    if (
      !userId ||
      !technology ||
      !questionId ||
      !question ||
      !Array.isArray(options) ||
      options.length < 2 ||
      selectedAnswer === undefined ||
      selectedAnswer === null ||
      !correctAnswer
    ) {
      return res.status(400).json({
        message: "Маълумоти хатогӣ пурра фиристода нашудааст",
      });
    }

    const mistakes = getMistakes();

    const newMistake = {
      id: Date.now().toString(),
      userId: String(userId),
      technology,
      questionId: String(questionId),
      question,
      options,
      selectedAnswer,
      correctAnswer,
      answer:
        typeof answer === "number" ? answer : options.indexOf(correctAnswer),
      explanation: explanation || "",
      date: new Date().toISOString(),
    };

    mistakes.push(newMistake);

    saveMistakes(mistakes);

    return res.status(201).json({
      message: "Хатогӣ сабт шуд",
      mistake: newMistake,
    });
  } catch (error) {
    console.error("ADD MISTAKE ERROR:", error);

    return res.status(500).json({
      message: "Хатогиро сабт кардан имконнопазир аст",
    });
  }
};

export const getUserMistakesController = (req, res) => {
  try {
    const { userId } = req.query;

    if (!userId) {
      return res.status(400).json({
        message: "userId ҳатмӣ мебошад",
      });
    }

    const mistakes = getMistakes();

    const userMistakes = mistakes.filter(
      (mistake) => String(mistake.userId) === String(userId),
    );

    return res.json({
      mistakes: userMistakes,
    });
  } catch (error) {
    console.error("GET MISTAKES ERROR:", error);

    return res.status(500).json({
      message: "Хатогиҳоро гирифтан имконнопазир аст",
    });
  }
};

export const deleteMistakeController = (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = req.query;

    if (!id) {
      return res.status(400).json({
        message: "id ҳатмӣ мебошад",
      });
    }

    const mistakes = getMistakes();

    const mistakeIndex = mistakes.findIndex(
      (mistake) =>
        String(mistake.id) === String(id) &&
        (!userId || String(mistake.userId) === String(userId)),
    );

    if (mistakeIndex === -1) {
      return res.status(404).json({
        message: "Хатогӣ ёфт нашуд",
      });
    }

    const deletedMistake = mistakes[mistakeIndex];

    mistakes.splice(mistakeIndex, 1);

    saveMistakes(mistakes);

    return res.json({
      message: "Хатогӣ бомуваффақият нест карда шуд",
      deletedId: deletedMistake.id,
    });
  } catch (error) {
    console.error("DELETE MISTAKE ERROR:", error);

    return res.status(500).json({
      message: "Хатогиро нест кардан имконнопазир аст",
    });
  }
};
