import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import tasks from "../data/tasks.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const tasksPath = path.join(__dirname, "../data/tasks.js");

const saveTasks = () => {
  const content = `const tasks = ${JSON.stringify(tasks, null, 2)};\n\nexport default tasks;\n`;
  fs.writeFileSync(tasksPath, content, "utf-8");
};

const findTechnology = (technology) => {
  if (!technology) return null;

  return (
    Object.keys(tasks).find(
      (key) => key.toLowerCase() === String(technology).toLowerCase(),
    ) || null
  );
};

const findTaskById = (id) => {
  for (const technology of Object.keys(tasks)) {
    const index = tasks[technology].findIndex(
      (task) => Number(task.id) === Number(id),
    );

    if (index !== -1) {
      return {
        technology,
        index,
        task: tasks[technology][index],
      };
    }
  }

  return null;
};

export const getAllTasksController = (req, res) => {
  const { technology, count } = req.query;

  let result;

  if (technology) {
    const technologyKey = findTechnology(technology);

    result = technologyKey
      ? tasks[technologyKey].map((task) => ({
          ...task,
          technology: technologyKey,
        }))
      : [];
  } else {
    result = Object.keys(tasks).flatMap((technologyKey) =>
      tasks[technologyKey].map((task) => ({
        ...task,
        technology: technologyKey,
      })),
    );
  }

  const taskCount = Number(count);

  if (taskCount > 0) {
    result = result.slice(0, taskCount);
  }

  return res.json(result);
};

export const getTaskByIdController = (req, res) => {
  const found = findTaskById(req.params.id);

  if (!found) {
    return res.status(404).json({
      message: "Масъала ёфт нашуд",
    });
  }

  return res.json({
    ...found.task,
    technology: found.technology,
  });
};

export const createTaskController = (req, res) => {
  const { technology, title, description, requirements, answer, xp } =
    req.body;

  const technologyKey = findTechnology(technology);

  if (!technologyKey) {
    return res.status(400).json({
      message: "Технология нодуруст аст",
    });
  }

  if (
    !String(title || "").trim() ||
    !String(description || "").trim() ||
    !String(answer || "").trim()
  ) {
    return res.status(400).json({
      message: "Маълумоти зарурӣ пур карда нашудааст",
    });
  }

  const allTasks = Object.values(tasks).flat();

  const maxId = allTasks.reduce(
    (max, task) => Math.max(max, Number(task.id) || 0),
    0,
  );

  const newTask = {
    id: maxId + 1,
    technology: technologyKey,
    title: title.trim(),
    description: description.trim(),
    requirements: Array.isArray(requirements) ? requirements : [],
    answer: answer.trim(),
    xp: Number(xp) > 0 ? Number(xp) : 20,
  };

  tasks[technologyKey].push(newTask);
  saveTasks();

  return res.status(201).json(newTask);
};

export const updateTaskController = (req, res) => {
  const { technology, title, description, requirements, answer, xp } =
    req.body;

  const found = findTaskById(req.params.id);

  if (!found) {
    return res.status(404).json({
      message: "Масъала ёфт нашуд",
    });
  }

  if (
    !String(title || "").trim() ||
    !String(description || "").trim() ||
    !String(answer || "").trim()
  ) {
    return res.status(400).json({
      message: "Маълумоти зарурӣ пур карда нашудааст",
    });
  }

  const newTechnology = technology
    ? findTechnology(technology)
    : found.technology;

  if (!newTechnology) {
    return res.status(400).json({
      message: "Технология нодуруст аст",
    });
  }

  const updatedTask = {
    ...found.task,
    id: found.task.id,
    technology: newTechnology,
    title: title.trim(),
    description: description.trim(),
    requirements: Array.isArray(requirements) ? requirements : [],
    answer: answer.trim(),
    xp: Number(xp) > 0 ? Number(xp) : 20,
  };

  if (newTechnology !== found.technology) {
    tasks[found.technology].splice(found.index, 1);
    tasks[newTechnology].push(updatedTask);
  } else {
    tasks[found.technology][found.index] = updatedTask;
  }

  saveTasks();

  return res.json(updatedTask);
};

export const deleteTaskController = (req, res) => {
  const found = findTaskById(req.params.id);

  if (!found) {
    return res.status(404).json({
      message: "Масъала ёфт нашуд",
    });
  }

  const [deletedTask] = tasks[found.technology].splice(found.index, 1);

  saveTasks();

  return res.json({
    message: "Масъала нест карда шуд",
    task: {
      ...deletedTask,
      technology: found.technology,
    },
  });
};