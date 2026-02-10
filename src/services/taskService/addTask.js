const { Task } = require("../../domain/task/task");

function addTask(id, description, now){
    const newTask = new Task(id, description, now);

    return newTask;
}

module.exports = { addTask };