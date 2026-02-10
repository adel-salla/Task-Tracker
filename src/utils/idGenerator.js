const { randomUUID } = require("crypto");

function generateUUID(){
    return randomUUID();
}

// Closure
function incrementalIdGen(start = 1){
    let currentId = start - 1;

    const increment = () => {
        currentId++;
        return currentId;
    }

    return increment;
}

module.exports = { generateUUID, incrementalIdGen };