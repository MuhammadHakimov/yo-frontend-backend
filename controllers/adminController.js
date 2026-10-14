
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { pool } from "../config/db.js";
import { lessons } from "../data/lessons.js";
import tasks from "../data/tasks.js";
import tests from "../data/tests.js";

export const adminLoginController = async (req, res) => {
  try {
    const { email, password } = req.body || {};

    if (
      typeof email !== "string" ||
      !email.trim() ||
      typeof password !== "string" ||
      !password
    ) {
      return res.status(400).json({
        message: "Email ва парол ҳатмӣ мебошанд.",
      });
    }

    if (!process.env.JWT_SECRET) {
      console.error("JWT_SECRET муайян нашудааст.");

      return res.status(500).json({
        message: "Танзимоти амниятии сервер нодуруст аст.",
      });
    }

    const result = await pool.query(
      "SELECT * FROM users WHERE LOWER(email) = $1 LIMIT 1",
      [email.trim().toLowerCase()]
    );

    const user = result.rows[0];

    if (!user) {
      return res.status(401).json({
        message: "Email ё парол нодуруст аст.",
      });
    }

    if (user.role !== "admin") {
      return res.status(403).json({
        message: "Шумо иҷозати ворид шудан ба панели администраторро надоред.",
      });
    }

    if (
      typeof user.password !== "string" ||
      !user.password
    ) {
      return res.status(401).json({
        message: "Маълумоти воридшавӣ нодуруст аст.",
      });
    }

    const passwordCorrect = await bcrypt.compare(
      password,
      user.password
    );

    if (!passwordCorrect) {
      return res.status(401).json({
        message: "Email ё парол нодуруст аст.",
      });
    }

    const token = jwt.sign(
      {
        id: String(user.id),
        email: user.email,
        role: "admin",
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    const {
      password: hiddenPassword,
      ...userWithoutPassword
    } = user;

    return res.status(200).json({
      message: "Воридшавии администратор бомуваффақият анҷом ёфт.",
      token,
      admin: {
        ...userWithoutPassword,
        id: String(user.id),
        role: "admin",
      },
    });
  } catch (error) {
    console.error("ADMIN LOGIN ERROR:", error);

    return res.status(500).json({
      message: "Ҳангоми воридшавии администратор хато рӯй дод.",
    });
  }
};

export const getAdminUsersController = async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT
        id,
        name,
        surename,
        email,
        img,
        xp,
        level,
        role,
        mistakes,
        history
      FROM users
      ORDER BY name, id`
    );

    return res.status(200).json({
      users: result.rows,
      total: result.rowCount,
    });
  } catch (error) {
    console.error("ADMIN USERS ERROR:", error);

    return res.status(500).json({
      message: "Ҳангоми гирифтани рӯйхати корбарон хато рӯй дод.",
    });
  }
};

export const getAdminLessonsController = (req, res) => {
  try {
    const allLessons = Object.values(lessons).flatMap(
      (technology) => technology.lessons || []
    );

    return res.status(200).json({
      lessons: allLessons,
      total: allLessons.length,
    });
  } catch (error) {
    console.error("ADMIN LESSONS ERROR:", error);

    return res.status(500).json({
      message: "Ҳангоми гирифтани дарсҳо хато рӯй дод.",
    });
  }
};

export const getAdminTestsController = (req, res) => {
  try {
    const allTests = Object.values(tests).flat();

    return res.status(200).json({
      tests: allTests,
      total: allTests.length,
    });
  } catch (error) {
    console.error("ADMIN TESTS ERROR:", error);

    return res.status(500).json({
      message: "Ҳангоми гирифтани тестҳо хато рӯй дод.",
    });
  }
};

export const getAdminTasksController = (req, res) => {
  try {
    const allTasks = Object.values(tasks).flat();

    return res.status(200).json({
      tasks: allTasks,
      total: allTasks.length,
    });
  } catch (error) {
    console.error("ADMIN TASKS ERROR:", error);

    return res.status(500).json({
      message: "Ҳангоми гирифтани супоришҳо хато рӯй дод.",
    });
  }
};
