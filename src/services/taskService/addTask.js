const { Task } = require("../../domain/task/task");

function addTask(taskId, description, dateTimeNow){
    const newTask = new Task(taskId, description, dateTimeNow);

    return newTask;
}

module.exports = { addTask };