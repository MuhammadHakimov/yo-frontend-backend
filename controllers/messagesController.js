import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, "../data/messages.json");

export const sendMessage = (req, res) => {
  try {
    const { userId, name, email, message } = req.body;

    if (!message || !message.trim()) {
      return res.status(400).json({
        message: "Паём холӣ буда наметавонад",
      });
    }

    let messages = [];

    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath, "utf8");

      if (data.trim()) {
        messages = JSON.parse(data);
      }
    }

    const newMessage = {
      id: Date.now(),
      userId: userId || null,
      name: name || "",
      email: email || "",
      message: message.trim(),
      date: new Date().toISOString(),
      read: false,
    };

    messages.push(newMessage);

    fs.writeFileSync(
      filePath,
      JSON.stringify(messages, null, 2),
      "utf8"
    );

    res.status(201).json({
      message: "Паём фиристода шуд",
      data: newMessage,
    });

  } catch (error) {
    console.error("Send message error:", error);

    res.status(500).json({
      message: "Хатои сервер",
    });
  }
};

export const getMessages = (req, res) => {
  try {
    let messages = [];

    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath, "utf8");

      if (data.trim()) {
        messages = JSON.parse(data);
      }
    }

    res.json(messages);

  } catch (error) {
    console.error("Get messages error:", error);

    res.status(500).json({
      message: "Хатои сервер",
    });
  }
};
export const deleteMessage = (req, res) => {
  try {
    const { id } = req.params;

    let messages = [];

    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath, "utf8");

      if (data.trim()) {
        messages = JSON.parse(data);
      }
    }

    const messageExists = messages.some(
      (item) => String(item.id) === String(id)
    );

    if (!messageExists) {
      return res.status(404).json({
        message: "Мактуб ёфт нашуд",
      });
    }

    messages = messages.filter(
      (item) => String(item.id) !== String(id)
    );

    fs.writeFileSync(
      filePath,
      JSON.stringify(messages, null, 2),
      "utf8"
    );

    res.json({
      message: "Мактуб нест карда шуд",
    });

  } catch (error) {
    console.error("Delete message error:", error);

    res.status(500).json({
      message: "Хатои сервер",
    });
  }
};