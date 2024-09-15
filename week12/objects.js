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
        }
    }
}

let task1 = creatTask("buy milk", "get milk, bread and buy eggs", "go shopping")

task1.toggleCompleted();
console.log('|\t New task detail \t|');
task1.displayDeatails();