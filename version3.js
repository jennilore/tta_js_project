let tasks = [
    ["work",["complete the report", "talk to the team", "talk to the client"]],
    ["personal task",["buy groceries", "walk the dog", "do the lundry"]]
]

// a function to diplay task and there categories
function displayCategorizedTasks(){
    tasks.forEach((category) =>{
        console.log(`\t ${category[0]} tasks:`);
        category[1].forEach((tasks,index) =>{
            console.log(`\t\t ${index + 1}. ${task}`);
        })
    })
}

displayCategorizedTasks()