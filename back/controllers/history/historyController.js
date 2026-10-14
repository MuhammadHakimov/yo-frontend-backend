import { history } from "../../data/history/events.js";

export const getHistory = (req, res) => {
  res.status(200).json(history);
};

export const getHistoryById = (req, res) => {
  const item = history.find(
    (item) => item.id === Number(req.params.id)
  );

  if (!item) {
    return res.status(404).json({
      message: "History item not found",
    });
  }

  res.json(item);
};