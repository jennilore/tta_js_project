let tasks = ["spend time with God", "organize my room", "work out"];

function displayTasks(){
    console.log("task on you to do list are:");
    tasks.forEach((task, index) => {
        console.log(`${index + 1}: ${task}`);
    })
}

function addTasks(task) {
    tasks[tasks.length] = task;
    console.log(`succsses fully added "${task}" to the list \n`);
    // displayTask()
}

function addTasksStart(task){
    for (let i = tasks.length; i > 0; i--){
        tasks[i] = tasks[i - 1];
    }
    tasks[0] = task;
    console.log(`succsses fully added "${task}" to the to of your list \n`);
}

function removetasks(index){
    if (index >= 0 && index < tasks.length) {
        let removedtasks = tasks[index];
        for (let i = index; i < tasks.length; i++ ){
            tasks[i] = tasks [i - 1]
        }
        // tasks.length = tasks.length - 1;
        tasks.length--;
        console.log(`successefully removed "${removedtasks}" from the list \n"`)
    }else{
        console.log(`task with "${index} does not exist \n`)
    }
}


displayTasks();

addTasks("buy egg");
displayTasks();

addTasksStart("buy bread");
displayTasks();

removetasks(2)
displayTasks()