import User from "../models/user.model.js";
const getUsers = async () => {
  return await User.find();
};
export default {
  getUsers,
};
