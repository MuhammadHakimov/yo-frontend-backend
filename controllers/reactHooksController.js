import reactHooks from "../data/reactHooks.js";

export const getReactHooks = (req, res) => {
  res.json(reactHooks);
};

export const getReactHookById = (req, res) => {
  const hook = reactHooks.find((item) => item.id === req.params.id);

  if (!hook) {
    return res.status(404).json({
      message: "Hook ёфт нашуд"
    });
  }

  res.json(hook);
};