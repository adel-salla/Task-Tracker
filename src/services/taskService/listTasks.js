const { STATUSES } = require("../../domain/task/statusesEnum");

function listByStatus(repository, status){
    return repository
        .getAllTasks()
        .filter(
            task => task.getStatus() === status
        );
}

function listAllTasks(repository){
    return repository.getAllTasks();
}

function listDone(repository){
    return listByStatus(repository, STATUSES.DONE);
}

function listNotDone(repository){
    return listByStatus(repository, STATUSES.NOT_DONE);
}

function listInProgress(repository){
    return listByStatus(repository, STATUSES.IN_PROGRESS);
}

module.exports = { listAllTasks, listDone, listNotDone, listInProgress };