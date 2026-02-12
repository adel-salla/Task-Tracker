const taskService = require('../../services/taskService/index');
const { createTable } = require("./formatter");

function add(repository){
    const raw = process.argv[3]
    if (!raw)
        throw new Error("add <\"description\">");

    const description = raw[0].toUpperCase() + raw.slice(1);
    taskService.addTask(description, repository);
}

function del(repository){
    const taskId = process.argv[3];
    if (!taskId)
        throw new Error("delete <task-id>");

    taskService.deleteTask(taskId, repository);
}

function list(repository){
    const subCommand = (process.argv[3] || '').toLowerCase();
    let tasks;
    switch (subCommand){
        case '':
            tasks = taskService.listAllTasks(repository);
            break;
        case "done":
            tasks = taskService.listDone(repository);
            break;
        case "not-done":
            tasks = taskService.listNotDone(repository);
            break;
        case "in-progress":
            tasks = taskService.listInProgress(repository);
            break;
        default:
            throw new Error("list [done|not-done|in-progress]");
    }
    
    createTable(tasks);
}

function mark(repository){
    const subCommand = (process.argv[3] || '').toLowerCase();
    const taskId = process.argv[4];
    
    if (!taskId)
        throw new Error("mark <done|not-done|in-progress> <task-id>");
    
    switch (subCommand){
        case "done":
            taskService.markDone(taskId, repository);
            break;
        case "not-done":
            taskService.markNotDone(taskId, repository);
            break;
        case "in-progress":
            taskService.markInProgress(taskId, repository);
            break;
    
        default:
            throw new Error("mark <done|not-done|in-progress> <task-id>");
    }
}

function update(repository){
    const taskId = process.argv[3];
    const description = process.argv[4];
    
    if (!taskId || !description)
        throw new Error("update <id> <\"description\">");

    taskService.updateTask(taskId, description, repository);
}

module.exports = { add, del, list, mark, update };