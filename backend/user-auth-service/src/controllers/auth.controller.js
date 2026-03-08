import authService from "../services/auth.service.js";

const registerUser = async (req, res) => {
  try {
    const user = await authService.registerUser(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const { user, token } = await authService.loginUser(email, password);
    res.json({ message: "Login successful", user, token });
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
};

export default {
  registerUser,
  loginUser,
};
