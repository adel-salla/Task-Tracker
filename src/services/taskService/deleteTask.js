function deleteTask(taskId, repository){
    const task = repository.getTaskById(taskId);
    if (!task)
        throw new Error("Invalid task id");

    repository.delete(taskId);
}