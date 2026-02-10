const { STATUSES } = require("./statusesEnum");

class Task {
    #id;
    #description;
    #status;
    #createdDate;
    #updatedDate;
    constructor(id, description, now){
        this.#id = id;

        if (typeof description !== 'string' || description.trim() === '') 
            throw new Error("Description can't be empty");
        this.#description = description;

        this.#status = STATUSES.NOT_DONE;
        this.#createdDate = now;
        this.#updatedDate = now;
    }

    getId(){
        return this.#id;
    }

    changeDescription(description, now){
        if (typeof description !== 'string' || description.trim() === '') 
            throw new Error("Description can't be empty");

        this.#description = description;
        this.#updatedDate = now;
    }
    getDescription(){
        return this.#description
    }
    
    markDone(now){
        if (this.#status === STATUSES.DONE) 
            throw new Error(`The task is already marked as ${STATUSES.DONE}`);
        if (!(now instanceof Date))
            throw new Error("now must be a Date instance");
        
        this.#status = STATUSES.DONE;
        this.#updatedDate = now;
    }
    startProgress(now){
        if (this.#status === STATUSES.IN_PROGRESS) 
            throw new Error(`The task is already marked as ${STATUSES.IN_PROGRESS}`);
        if (!(now instanceof Date))
            throw new Error("now must be a Date instance");
        
        this.#status = STATUSES.IN_PROGRESS;
        this.#updatedDate = now;
    }
    reset(now){
        if (this.#status === STATUSES.NOT_DONE) 
            throw new Error(`The task is already marked as ${STATUSES.NOT_DONE}`);
        if (!(now instanceof Date))
            throw new Error("now must be a Date instance");
        
        this.#status = STATUSES.NOT_DONE;
        this.#updatedDate = now;
    }
    getStatus(){
        return this.#status;
    }

    getCreatedDate(){
        return this.#createdDate;
    }

    getUpdatedDate(){
        return this.#updatedDate;
    }
}

module.exports = { Task };