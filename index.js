let tasks = [
    ["work",["complete the report", "talk to the team", "talk to the client"]],
    ["personal task",["buy groceries", "walk the dog", "do the lundry"]]
]

// a function to diplay task and there categories
function displayCategorizedTasks(){
    tasks.forEach((category) =>{
        console.log(`\t ${category[0]} tasks:`);
        category[1].forEach((tasks,index) =>{
            console.log(`\t\t ${index + 1}. ${tasks}`);
        })
    })
}

// add category
function addCategorizedTasks(category, task){
    for (let i = 0; i < tasks.length; i++){
        if (tasks[i][0] === category){
            tasks[i][1].push(tasks);
            console.log(`task "${task}" added to ${category} task \n`);
            console.log("\n to do list after adding a new task \n");
            return;
        }
    }
    console.log(`category "${category}" not found \n`)

}

// function to remove a task from a category
function removedCategorizedTask(category, index){
    for (let i = 0; i < tasks.length; i++){
        if (tasks[i][0] === category){
            if(index >= 0 && index < task[i][1].length){
                let removetasks = task[i][1][index];
                for ( let j = index; j < task[i][1].length; j++){
                    task[i][1][j] = task[i][1][j] + 1;
                }
                task[i][1].length--;
                console.log(`\n task "${removetasks}" was removed from ${category} task \n`);
                console.log("\n to do list after removing a task \n");
                return;
            }
        }
    }
    console.log(`\n Category "${category}" not found \n`)
}

// function to check the task alphabetically
function sortTask(Category){
    for (let i = 0; i < tasks.length; i++){
        if (tasks[i][0] === Category){
            tasks[i][1].sort();
            console.log(`\n ${Category} not found \n`);
            console.log(`to do list after sorting task:`);
        }
    }
    console.log(`Category "${Category}" not found \n`)
}


// search trought category for task
function searchTask(Category, index){
    for (let i = 0; i < tasks.length; i++){
        if (tasks[i][0] === Category){
            let index = task[i][1].indexOf(task);
            if (index != -1){
                console.log(`task "${tasks} found at index ${index + 1} in "${Category}" task \n`);
            }
        }
    }console.log(`task "${tasks} was not found in "${Category}" task \n`);
    
}






console.log("To do list before adding a new task \n");
displayCategorizedTasks();


addCategorizedTasks ('work', 'complete the report');
displayCategorizedTasks();

removedCategorizedTask("personal", 1);
displayCategorizedTasks();

sortTask("work");
displayCategorizedTasks();

searchTask("Work", "talk to the team")
