function deleteTask(taskId, repository){
    const task = repository.getTask(taskId);
    if (!task)
        throw new Error("Invalid task id");

    repository.deleteTask(taskId);
}

module.exports = { deleteTask };