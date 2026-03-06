import userService from "../services/user.service.js";

const createUser = async (req, res) => {
  try {
    const user = await userService.createUser(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getUsers = async (req, res) => {
  const users = await userService.getUsers();
  res.json(users);
};

export default {
  createUser,
  getUsers,
};
