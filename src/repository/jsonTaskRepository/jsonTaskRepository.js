const tasksJsonHelper = require("./jsonTaskRepositoryHelper");
const { Task } = require("../../domain/task/task");
const { STATUSES } = require("../../domain/task/statusesEnum");

class JsonTaskRepository {
    #tasks;
    #lastId;
    #persist(){
        tasksJsonHelper.writeTasksJson({
            lastId: this.#lastId,
            tasks: this.#tasks
        });
    }
    #createTask(id, description, status, createdDate, updatedDate){
        const task = new Task(id, description, new Date(createdDate));
        
        switch (status){
            case STATUSES.DONE:
                task.markDone(updatedDate);
                break;
            case STATUSES.NOT_DONE:
                task.reset(updatedDate);
                break;
            case STATUSES.IN_PROGRESS:
                task.startProgress(updatedDate);
                break;
        }

        return task;
    }

    constructor(){
        tasksJsonHelper.createTasksJsonIfNotExists();
        const data = tasksJsonHelper.parseTasksJson();
        
        this.#tasks = data?.tasks ?? [];
        this.#lastId = data?.lastId ?? 0;
    }
    
    generateId(){
        return ++this.#lastId;
    }
    insertTask(task){
        const existingIndex = this.#tasks.findIndex(t => t.id === task.getId());

        const taskData = {
                id: task.getId(),
                description: task.getDescription(),
                status: task.getStatus(),
                createdDate: task.getCreatedDate(),
                updatedDate: task.getUpdatedDate()
            };
        
        if (existingIndex === -1){
            this.#tasks.push(taskData);
        } else {
            this.#tasks[existingIndex] = taskData;
        }
        this.#persist();
    }
    getTask(taskId){
        const targetTask = this.#tasks.find(task => task.id === taskId);
        if (!targetTask) return null;

        const task = this.#createTask(taskId, targetTask.description, targetTask.status, targetTask.createdDate, targetTask.updatedDate);

        return task;
    }
    deleteTask(taskId){
        const taskIndex = this.#tasks.findIndex(task => task.id === taskId);
        if (taskIndex === -1)
            throw new Error("Task not found");

        this.#tasks.splice(taskIndex, 1);

        this.#persist();
    }
}