
import "dotenv/config";
import express from "express";
import cors from "cors";
import chatRoutes from "./routes/chatRoutes.js";
import { adminRouter } from "./routes/admin.js";
import { lessonsRouter } from "./routes/lessons.js";
import { testsRouter } from "./routes/tests.js";
import { tasksRouter } from "./routes/tasks.js";
import { figmasRouter } from "./routes/figmas.js";
import { usersRouter } from "./routes/users.js";
import verificationRoutes from "./routes/verificationRoutes.js";
import messagesRouter from "./routes/messages.js";
import reactHooksRoutes from "./routes/reactHooksRoutes.js";
import channelsRouter from "./routes/channels.js";
import peopleRoutes from "./routes/history/peopleRoutes.js";
import historyRoutes from "./routes/history/historyRoutes.js";
import factsRoutes from "./routes/history/FactsRoutes.js";

const app = express();


app.use(cors({
  origin: [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
    "http://192.168.66.252:5173",
    "https://front-end-production-b1bd.up.railway.app"
  ]
}));


app.use(express.json());
app.use("/api/history/people", peopleRoutes);
app.use("/api/history", historyRoutes);
app.use("/api/facts", factsRoutes);
app.use("/api/channels", channelsRouter);
app.use("/api/messages", messagesRouter);
app.use("/api/react-hooks", reactHooksRoutes);
app.use("/api/admin", adminRouter);
app.use("/api/lessons", lessonsRouter);
app.use("/api/tasks", tasksRouter);
app.use("/api/figmas", figmasRouter);
app.use("/api/users", usersRouter);
app.use("/api/verification", verificationRoutes);
app.use("/api/tests", testsRouter);
app.use("/api", chatRoutes);
app.use((req, res) => {
  res.status(404).json({
    message: "Endpoint not found. Please check the API documentation.",
  });
});



const PORT = process.env.PORT || 8000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server: http://localhost:${PORT}`);
});
