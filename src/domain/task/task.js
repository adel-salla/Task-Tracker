const { STATUSES } = require("./statusesEnum");

class Task {
    #id;
    #description;
    #status;
    #createdDate;
    #updatedDate;
    constructor(id, description){
        this.#id = id;
        this.#description = description;
        this.#status = STATUSES.NOT_DONE;
        this.#createdDate = new Date();
        this.#updatedDate = new Date();
    }

    getId(){
        return this.#id;
    }

    changeDescription(description){
        if (typeof description !== 'string' || description.trim() === '') return false;

        this.#description = description;
        this.#updatedDate = new Date();
    }
    getDescription(){
        return this.#description
    }
    
    markDone(){
        if (this.#status == STATUSES.DONE) return false;
        
        this.#status = STATUSES.DONE;
        this.#updatedDate = new Date();
        
        return true;
    }
    startProgress(){
        if (this.#status == STATUSES.IN_PROGRESS) return false;
        
        this.#status = STATUSES.IN_PROGRESS;
        this.#updatedDate = new Date();
        
        return true;
    }
    reset(){
        if (this.#status == STATUSES.NOT_DONE) return false;
        
        this.#status = STATUSES.NOT_DONE;
        this.#updatedDate = new Date();
        
        return true;
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