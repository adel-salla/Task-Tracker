const { readFileSync, writeFileSync, existsSync } = require("fs");
const { resolve } = require("path");

const filePath = resolve(__dirname, "../../../tasks.json");

function createTasksJsonIfNotExists(){
    if (!existsSync(filePath)){
        try {
            writeFileSync(filePath, JSON.stringify({ lastId: 0, tasks: [] }, null, 4));
        } catch (error){
            throw error;
        }
    }
}

function readTasksJson(){
    try {
        return readFileSync(filePath, {encoding: "utf-8"});
    } catch (error){
        throw error;
    }
}
function parseTasksJson(){
    const textData = readTasksJson();
    return JSON.parse(textData);
}

function writeTasksJson(data) {
    const stringifiedData = JSON.stringify(data, null, 4);
    try {
        writeFileSync(filePath, stringifiedData);
    } catch (error){
        console.error(error);
    }
}

module.exports = { createTasksJsonIfNotExists, writeTasksJson, parseTasksJson };