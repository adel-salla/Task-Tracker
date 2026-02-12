function cli(repository){
    const { add, del, list, mark, update } = require("./cliHelper");
    
    const command = (process.argv[2] || '').toLowerCase();
    
    switch (command){
        case "add":
            add(repository);
            break;
        case "delete":
        case "del":
            del(repository);
            break;
        case "list":
        case "li":
            list(repository);
            break;
        case "mark":
        case "m":
            mark(repository);
            break;
        case "update":
        case "u":
            update(repository);
            break;
    
        default:
            throw new Error("Invalid command");
    }
}

module.exports = { cli };