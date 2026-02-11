const { Task } = require("../../domain/task/task");

function addTask(description, repository){
    const taskId = repository.generateId();

    const newTask = new Task(taskId, description, new Date());

    repository.insertTask(newTask);
}

module.exports = { addTask };