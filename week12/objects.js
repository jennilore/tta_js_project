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
            console.log("*...........................................*");
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

let task1 = creatTask("buy milk", "get milk, bread and buy eggs", "go shopping");
task1.displayDeatails();

task1.toggleCompleted();
console.log('|\t New task detail \t|');
task1.displayDeatails();

task1.updateTitle("buy groceries - 1");
console.log('|\t Updated task detail \t|');
task1.displayDeatails();

task1 = updateDescription("1. buy milk", "get milk, bread and buy eggs"); 
console.log('|\t Updated task detail \t|');
task1.displayDeatails();

task1 = updateCategory("shopping - 1"); 
console.log('|\t Updated task detail \t|');
task1.displayDeatails();