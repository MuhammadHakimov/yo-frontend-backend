import { people } from "../../data/history/people.js";

export const getPeople = (req, res) => {
  res.status(200).json(people);
};

export const getPersonById = (req, res) => {
  const person = people.find(
    (item) => item.id === Number(req.params.id)
  );

  if (!person) {
    return res.status(404).json({
      message: "Корбар ёфт нашуд",
    });
  }

  res.status(200).json(person);
};