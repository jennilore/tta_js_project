class task{
    constructor(title,description){
        this.title = title;
        this.description = description;
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
        console.log(`\t task; ${this.title}`)
        console.log(`\t description; ${this.description}`)
        // console.log(`\t completed; ${this.completed}`)
        if (this.completed){
            console.log("\t task is completed");
        }
        else{
            console.log("\t task is not complteted");
        }
        console.log("*............................................*")
    }
}


let task1 = new task ("get groceries","buy milk, bread, egg and jam in the store");


task1.displayDeatails();


task1.toggleCompleted();
console.log('|\t New task detail \t|')
task1.displayDeatails()