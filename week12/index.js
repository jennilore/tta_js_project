function creatTask(title, description, category){
    // console.log("To do list");
   return{
       title, 
        description, 
        category,
        completed: false,

        toggleComplted(){
            this.completed = this.completed;
        },


        displayDeatails(){
            // console.log("*...........................................*");
            console.log(`\t categoty; ${this.category} `)
            console.log(`\t task; ${this.title}`)
            console.log(`\t description; ${this.description}`)
            if (this.completed){
                console.log("\t task is completed");
            }
            else{
                console.log("\t task is not complteted");
            }
        },

        updateTitle(newTitle){
            this.title = newTitle;
            console.log("task title updated successfully")
        },

        updateDescription(newDescription){
            this.description = newDescription;
            console.log("Task description updated sucessfully")
        },

        updateCategory(newCategory){
            this.category = newCategory
            console.log("Tas category updated successfully")
        }
        
    }
}

function creatWorkTask(title, description, deadline){
    let task = creatTask(title, description, "work");
    return{
        ...task,
        deadline,

        toggleComplted(){
            task.toggleComplted();
        },

        displayDeatails(){
            task.displayDeatails();
            console.log(`Deadline: ${this.deadline}`);
        }
    }
}

function creatPersonalTask(title, description, urgent){
    let task = creatTask(title, description, "personal");
    return{
        ...task,
        urgent,

        toggleComplted(){
            task.toggleComplted();
        },

        displayDeatails(){
            task.displayDeatails();
            console.log(`Urgent: ${this.urgent}`);
        }
    }
}

function displayTaskDeatails(task){
    task.displayDeatails();
}

console.log("*.................... Personal Related Task........................*");
let task1 = creatTask("buy milk", "get milk, bread and buy eggs", "go shopping");
// task1.displayDeatails();
displaytaskDeatails(task1);
console.log("*...........................................*");

console.log("*...................... Work Related Task .........................*");
let task2 = creatWorkTask("complete report", "finish the report before the meeting", "sunday 12pm");
// task2.displayDeatails();
displayTaskDeatails(task2)
console.log("*...........................................*");

task2.toggleComplted();
console.log("*...........................................*");
task2.displayDeatails();
console.log("*...........................................*");

console.log("*........................... Personal Task .............................*");
let task3 = creatPersonalTask("call mom", "call the uber", "take my medecines");
// task3.displayDeatails();
displayTaskDeatails(task3)
console.log("*...........................................*");

task3.toggleComplted();
console.log("*...........................................*");
task3.displayDeatails();
console.log("*...........................................*");

let task = (task1, task2, task3);


console.log("all task");
console.log("*..........................................................*");
task.forEach(task => {
    // task.displayDeatails();
    displayTaskDeatails(task);
    console.log("\n")
});