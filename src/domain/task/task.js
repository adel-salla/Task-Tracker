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
        this.#status = STATUSES.DONE;
        this.#updatedDate = now;
    }
    startProgress(now){
        this.#status = STATUSES.IN_PROGRESS;
        this.#updatedDate = now;
    }
    reset(now){
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