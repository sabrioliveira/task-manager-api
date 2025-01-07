import * as user from "../services/userService.js";

export const createUser = async (req, res) => {
  try {
    await user.createUser(req.body);
    return res.status(201).json({ message: "User created successfully" });
  } catch {
    return res.status(500).json({ message: "Error creating user" });
  }
};

export const signUser = async (req, res) => {
  try {
    await user.signUser(req.body);
    return res.status(200).json({ message: "User session started" });
  } catch {
    return res
      .status(500)
      .json({ message: "Failed to connect user - check email and password" });
  }
};
