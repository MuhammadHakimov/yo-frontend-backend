import facts from "../../data/history/facts.js";

export const getFacts = (req, res) => {
  res.status(200).json(facts);
};

export const getFactById = (req, res) => {
  const fact = facts.find(
    (item) => String(item.id) === String(req.params.id)
  );

  if (!fact) {
    return res.status(404).json({
      message: "Факт ёфт нашуд",
    });
  }

  res.status(200).json(fact);
};