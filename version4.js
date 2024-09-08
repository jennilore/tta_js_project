let tasks = ["spend time with God", "organize my room", "work out"];

function displayTasks(){
    console.log("task on you to do list are:");
    tasks.forEach((task, index) => {
        console.log(`${index + 1}: ${task}`);
    })
    console.log("\n");
}

function sortTask(){
    tasks.sort();
    console.log("Task sorted in alphabetic order");
    displayTasks();
}

function searchTask(task){
    let index = tasks.indexOf(task);
    if(index != -1){
        console.log(`task ${task} found at index ${index + 1}`);
    }else{
        console.log(` Task ${task} not found`)
    }
}


displayTasks();
sortTask();
searchTask("buy milk")