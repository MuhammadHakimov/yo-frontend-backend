import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { lessons } from "../data/lessons.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const lessonsFile = path.join(__dirname, "../data/lessons.js");

const saveLessons = (data) => {
  const content = `export const lessons = ${JSON.stringify(data, null, 2)};\n`;

  fs.writeFileSync(lessonsFile, content, "utf8");
};

export const getAllLessonsController = (req, res) => {
  res.json(lessons);
};

export const getLessonByIdController = (req, res) => {
  const { technology, id } = req.params;

  if (!lessons[technology]) {
    return res.status(404).json({
      message: "Ин технология ёфт нашуд",
    });
  }

  const lesson = lessons[technology].lessons.find(
    (item) => String(item.id) === String(id)
  );

  if (!lesson) {
    return res.status(404).json({
      message: "Дарс ёфт нашуд",
    });
  }

  res.json(lesson);
};

export const addLessonController = (req, res) => {
  const { technology, lesson } = req.body;

  if (!technology || !lesson) {
    return res.status(400).json({
      message: "technology ва lesson лозим аст",
    });
  }

  if (!lessons[technology]) {
    return res.status(404).json({
      message: "Ин технология ёфт нашуд",
    });
  }

  if (!lesson.id) {
    lesson.id = Date.now().toString();
  }

  lessons[technology].lessons.push(lesson);

  saveLessons(lessons);

  res.status(201).json({
    message: "Дарс илова шуд",
    lesson,
  });
};

export const updateLessonController = (req, res) => {
  const { id } = req.params;
  const { technology, lesson } = req.body;

  if (!technology || !lesson) {
    return res.status(400).json({
      message: "technology ва lesson лозим аст",
    });
  }

  if (!lessons[technology]) {
    return res.status(404).json({
      message: "Ин технология ёфт нашуд",
    });
  }

  const lessonIndex = lessons[technology].lessons.findIndex(
    (item) => String(item.id) === String(id)
  );

  if (lessonIndex === -1) {
    return res.status(404).json({
      message: "Дарс ёфт нашуд",
    });
  }

  lesson.id = id;

  lessons[technology].lessons[lessonIndex] = lesson;

  saveLessons(lessons);

  res.json({
    message: "Дарс навсозӣ шуд",
    lesson,
  });
};

export const deleteLessonController = (req, res) => {
  const { id } = req.params;
  const { technology } = req.body;

  if (!technology) {
    return res.status(400).json({
      message: "technology лозим аст",
    });
  }

  if (!lessons[technology]) {
    return res.status(404).json({
      message: "Ин технология ёфт нашуд",
    });
  }

  const lessonIndex = lessons[technology].lessons.findIndex(
    (item) => String(item.id) === String(id)
  );

  if (lessonIndex === -1) {
    return res.status(404).json({
      message: "Дарс ёфт нашуд",
    });
  }

  const deletedLesson = lessons[technology].lessons.splice(
    lessonIndex,
    1
  )[0];

  saveLessons(lessons);

  res.json({
    message: "Дарс нест карда шуд",
    lesson: deletedLesson,
  });
};
