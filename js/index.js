// let taskMan = new TaskManager();
// taskMan.addTask('Tim', 'Laundry', 'Himself', 'October 13', 'In progress');
// console.log(taskMan.tasks);

// let submitButton = document.getElementById("submitButton");
// subtmitButton.addEventListener("submit", addTask());
// TaskManager.render();

//Task 5 Testing
  // Creates a task html and console.logs it
let taskHtml = createTaskHtml('John', 'laundry', 'unknown', 'wednesday', 'in progress');
console.log(`Prints task HTML: ${taskHtml}`);

// Hard codeed tasks in
// Creates a new TaskManager class, that includes a list of tasks
let taskMan = new TaskManager(0);
//0 Tasks because no tasks were added yet
// console.log("Length of the task: "  + taskMan.tasks.legnth);
// taskMan.addTask('Tim', 'Laundry', 'Himself', 'October 13', 'In progress');
// taskMan.addTask('John', 'laundry', 'unknown', 'wednesday', 'in progress');
// taskMan.addTask('Jimmy', 'laundry', 'unknown', 'wednesday', 'in progress');
// console.log(taskMan.tasks);
// 2 Tasks because 2 tasks were added
// console.log("Length of the task: "  + taskMan.tasks.legnth);
// taskMan.render();

const taskForm = document.getElementById("cardList");

// // Submit Button
let submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", () => {
    // // Grabs the user's inputs from the form
    let name = document.getElementById('name').value;
    let description = document.getElementById('description').value;
    let assignedTo = document.getElementById('assignedTo').value;
    let dueDate = document.getElementById('dueDate').value;
    taskMan.addTask(name, description, assignedTo, dueDate, taskMan.currentID);
});
console.log(`Current list of tasks: ${taskMan.tasks}`);
taskMan.render();
