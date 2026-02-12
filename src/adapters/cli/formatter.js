function formatDate(date){
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

const ID_CELL = 10;
const DESCRIPTION_CELL = 25;
const STATUS_CELL = 15;
const CREATED_DATE_CELL = 25;
const UPDATED_DATE_CELL = 25;

function createHeaderRow(){
    console.log('-'.repeat(11 + ID_CELL + DESCRIPTION_CELL + STATUS_CELL + CREATED_DATE_CELL + UPDATED_DATE_CELL));
    console.log('|', "Id".padEnd(ID_CELL),
                '|', "Description".padEnd(DESCRIPTION_CELL),
                '|', "Status".padEnd(STATUS_CELL),
                '|', "Created at".padEnd(CREATED_DATE_CELL),
                '|', "Updated at".padEnd(UPDATED_DATE_CELL), '|');
}

function createRow(id, description, status, createdDate, updatedDate){
    console.log('-'.repeat(11 + ID_CELL + DESCRIPTION_CELL + STATUS_CELL + CREATED_DATE_CELL + UPDATED_DATE_CELL));
    console.log('|', String(id).padEnd(ID_CELL),
                '|', String(description).padEnd(DESCRIPTION_CELL),
                '|', String(status).padEnd(STATUS_CELL),
                '|', String(createdDate).padEnd(CREATED_DATE_CELL),
                '|', String(updatedDate).padEnd(UPDATED_DATE_CELL), '|');
}

function createTable(tasks){
    createHeaderRow();

    for (const task of tasks){
        const id = task.getId();
        const description = task.getDescription();
        const status = task.getStatus();
        const createdDate = formatDate(task.getCreatedDate());
        const updatedDate = formatDate(task.getUpdatedDate());

        createRow(id, description, status, createdDate, updatedDate);
    }

    console.log('-'.repeat(11 + ID_CELL + DESCRIPTION_CELL + STATUS_CELL + CREATED_DATE_CELL + UPDATED_DATE_CELL));
}

module.exports = { createTable };