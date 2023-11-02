const routes = require("express").Router();
const TaskController = require("../controller/TaskController");

// Rota para exibir a lista de tarefas
routes.get("/", TaskController.getAllTasks);

// Rota para criar uma nova tarefa
routes.post("/create", TaskController.createTask);

// Rota para obter a página de edição ou exclusão
routes.get("/getById/:id/:method", TaskController.getById);

// Rota para atualizar a tarefa
routes.post("/updateOne/:id", TaskController.updateOneTask);

//Rota de confirmação e delete
routes.post("/deleteOne/:id", TaskController.deleteOneTask);


module.exports = routes;
