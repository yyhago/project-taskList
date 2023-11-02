const Task = require("../models/Task");

const getAllTasks = async (req, res) => {
  try {
    const taskslist = await Task.find();
    return res.render("index", { taskslist, task: null, taskDele: null });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const createTask = async (req, res) => {
  const task = req.body;

  if (!task.task) {
    return res.redirect("/");
  }

  try {
    await Task.create(task);
    return res.redirect("/");
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const getById = async (req, res) => {
  try {
    const taskslist = await Task.find();
    if (req.params.method === "update") {
      const task = await Task.findOne({ _id: req.params.id });
      res.render("index", { task, taskDele: null, taskslist });
    } else {
      const taskDele = await Task.findOne({ _id: req.params.id });
      res.render("index", { task: null, taskDele, taskslist });
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const deleteOneTask = async (req, res) => {
  try {
    await Task.deleteOne({ _id: req.params.id });
    res.redirect("/");
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const updateOneTask = async (req, res) => {
  try {
    const task = req.body;
    await Task.updateOne({ _id: req.params.id }, task);
    res.redirect("/");
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

module.exports = {
  getAllTasks,
  createTask,
  getById,
  updateOneTask, 
  deleteOneTask,
};
