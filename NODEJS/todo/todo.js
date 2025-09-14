const fs = require("fs");
const filePath = "./tasks.json";

const loadTasks = () => {
    try {
        const dataBUffer = fs.readFileSync(filePath)
        const dataJSON = dataBUffer.toString()
        return JSON.parse(dataJSON)
    } catch (error) {
        return []
    }
}

const saveTasks = (tasks)

const addTask = (task) 

if(command === : "add"){
    addtask(arguement)
}else if(command)