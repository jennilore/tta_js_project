function creatTask(title, description, category){
    // console.log("To do list");
    let completed = false;
   return{
       title, 
        description, 
        category,
        // completed: false,

        toggleComplted(){
            completed = this.completed;
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

let task1 = creatTask("task1", "description 1", "work");
task1.displayDeatails();

task1.toggleComplted();
task1.displayDeatails();
