const { addTask } = require("./addTask");
const { deleteTask } = require("./deleteTask");
const { listAllTasks, listDone, listNotDone, listInProgress } = require("./listTasks");
const { markDone, markInProgress, markNotDone } = require("./markTask");
const { updateTask } = require("./updateTask");

module.exports = { addTask, deleteTask, listAllTasks, listDone, listNotDone, listInProgress, markDone, markInProgress, markNotDone, updateTask };