function markDone(taskId, repository){
    const task = repository.getTask(taskId);
    task.markDone(new Date());
    
    repository.insertTask(task);
}
function markNotDone(taskId, repository){
    const task = repository.getTask(taskId);
    task.reset(new Date());
    
    repository.insertTask(task);
}
function markInProgress(taskId, repository){
    const task = repository.getTask(taskId);
    task.startProgress(new Date());
    
    repository.insertTask(task);
}

module.exports = { markDone, markNotDone, markInProgress };