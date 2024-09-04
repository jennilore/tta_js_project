let task = ["spend time with God", "organize my room", "work out"];


console.log("My to do")
console.log("1- " + task[0]);
console.log(`2- ${task[1]}`);
console.log("3- " + task[2]);

task.push("Cleaning the house");
console.log("4-" + task[3])

console.log(task)

task.pop();
console.log(task);

task.shift();
console.log(task);

task.unshift("Make some breakfast");
console.log(task);

task.splice(1, 1)
console.log(task)

task.splice(1, 0, "go to the market")
console.log(task)
