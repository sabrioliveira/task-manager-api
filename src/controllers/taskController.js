import * as task from "../services/taskService.js";

export const createTask = async (req, res) => {
  if (req.body) {
    try {
      await task.createTask(req.body);
      return res.status(201).json({ message: "Task created successfully" });
    } catch {
      return res.status(400).json({ message: "Error creating task" });
    }
  } else {
    return res.status(400).json({ message: "Error - task data pending" });
  }
};

export const getAllTasks = async (req, res) => {
  try {
    const tasks = await task.getAllTasks();
    return res.status(200).json(tasks);
  } catch {
    return res.status(400).json({ message: "Error fetching tasks" });
  }
};

export const updateTask = async (req, res) => {
  try {
    const updatedTask = await task.updateTask(req.params.id, req.body);
    return res.status(200).json(updatedTask);
  } catch {
    return res.status(400).json({ message: "Error updating task" });
  }
};
export const deleteTask = async (req, res) => {
  try {
    await task.deleteTask(req.params.id);
    return res.status(200).json({ message: "Task deleted successfully" });
  } catch {
    return res.status(400).json({ message: "Error deleting task" });
  }
};

export const getUserTasks = async (req, res) => {
  try {
    const tasks = await task.getUserTasks(req.params.id);
    return res.status(200).json(tasks);
  } catch {
    return res.status(400).json({ message: "Error fetching user tasks" });
  }
};
