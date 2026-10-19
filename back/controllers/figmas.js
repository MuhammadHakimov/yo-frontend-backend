import figmas from "../data/figmas.js";

export const getAllFigmasController = (req, res) => {
  res.status(200).json(figmas);
};