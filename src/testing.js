const {addTask} = require("./services/taskService/addTask")

const tasks = [addTask('abc'), addTask('sus'), addTask('imposter'), addTask()]

console.log(tasks[0].getId());
console.log(tasks[1].getId());
console.log(tasks[2].getId());
console.log(tasks[3].getId());
abc