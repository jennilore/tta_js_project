class task{
    constructor(title, description, category){
        this.title = title;
        this.description = description;
        this.category = category;
        this.completed = false;
    }
    
    displayDeatails(){
        console.log(`task; ${this.title}`);
        console.log(`Description; ${this.description}`);
    }
   
    toggleCompleted(){
        this.completed = this.completed
    }

    displayDeatails(){
        console.log("*...........................................*");
        console.log(`\t categoty; ${this.category} `)
        console.log(`\t task; ${this.title}`)
        console.log(`\t description; ${this.description}`)
        console.log(`\t completed; ${this.completed}`)
        if (this.completed){
            console.log("\t task is completed");
        }
        else{
            console.log("\t task is not complteted");
        }

        console.log("*............................................*")
    }

    // updateTask(newTitle, newCategoty, newDescription){
    //     this.title = newTitle;
    //     this.category = newCategoty;
    //     this.descriptionc = newDescription;
    //     console.log("Task updated successfully");
    // }

    updateTaskTitle(newTitle){
        this.title = newTitle
        console.log("Task title updated sucessfully")
    }

    updateTaskDescription(newDescription){
        this.description = newDescription
        console.log("Task description updated sucessfully")
    }

    updateTaskCategory(newCategoty){
        this.category = newCategoty
        console.log("Task category updated sucessfully")
    }
}


let task1 = new task ("get groceries","buy milk, bread, egg and jam in the store", "book shoppping");


task1.displayDeatails();

task1.updateTask("buy groceries - 1", "1. Get milk, bread, and eggs from the store");
console.log('|\t Updated task detail \t|');
task1.displayDeatails();

task1.toggleCompleted();
console.log('|\t New task detail \t|')
task1.displayDeatails();