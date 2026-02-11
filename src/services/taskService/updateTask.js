function updateTask(taskId, description, repository){
    const task = repository.getTask(taskId);

    task.changeDescription(description, new Date());

    repository.insertTask(task);
}

module.exports = { updateTask };