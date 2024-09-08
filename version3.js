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

console.log("To do list before adding a new task \n");
displayCategorizedTasks();


addCategorizedTasks ('works', 'complete the report')
displayCategorizedTasks();
