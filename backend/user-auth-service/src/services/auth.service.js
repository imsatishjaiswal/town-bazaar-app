import User from "../models/user.model.js";
import jwt from "jsonwebtoken";

const registerUser = async (data) => {
  return await User.create(data);
};

const loginUser = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error("Invalid email or password");

  const isMatch = await user.comparePassword(password);
  if (!isMatch) throw new Error("Invalid email or password");

  const token = jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET || "default_secret_key",
    { expiresIn: "1d" },
  );
  return { user, token };
};

export default {
  registerUser,
  loginUser,
};
