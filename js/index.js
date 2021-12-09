// let taskMan = new TaskManager();
// taskMan.addTask('Tim', 'Laundry', 'Himself', 'October 13', 'In progress');
// console.log(taskMan.tasks);

// let submitButton = document.getElementById("submitButton");
// subtmitButton.addEventListener("submit", addTask());
// TaskManager.render();

//Task 5 Testing
  // Creates a task html and console.logs it
// let taskHtml = createTaskHtml('John', 'laundry', 'unknown', 'wednesday', 'in progress');
// console.log(`Prints task HTML: ${taskHtml}`);

// Hard coded tasks in
// Creates a new TaskManager class, that includes a list of tasks
let taskMan = new TaskManager(0);
// //0 Tasks because no tasks were added yet
// console.log("Length of the task: "  + taskMan.tasks.legnth);
taskMan.addTask('Dusting', 'Dust off the desk.', 'Lisa', 'Dec 13', 'In progress');
taskMan.addTask('Laundry', 'Fold the clean clothes.', 'John', 'Dec 14', 'In progress');
taskMan.addTask('Dishes', 'Load the dishwasher.', 'Kate', 'Dec 15', 'In progress');
taskMan.addTask('Floor', 'Mop and vacum the floors.', 'Bobby', 'Dec 16', 'In progress');
taskMan.addTask('Generation', 'Graduate the Generation class.', 'Students', 'Dec 17', 'In progress');
// // 5 Tasks because 5 tasks were added
// console.log(taskMan.tasks);

// console.log("Length of the task: "  + taskMan.tasks.legnth);
// taskMan.render();

// const taskForm = document.getElementById("cardList");
// const submitButton2 = document.getElementById("submitButton2");
// const theStartButton = document.getElementById("TheStartButton");

// // Submit Button
let submitButton = document.getElementById("submitButton");

submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    // // Grabs the user's inputs from the form
    let name = document.getElementById('name').value;
    let description = document.getElementById('description').value;
    let assignedTo = document.getElementById('assignedTo').value;
    let dueDate = document.getElementById('dueDate').value;

    taskMan.addTask(name, description, assignedTo, dueDate, "In Progress");

    if (name == '') {
        alert("Please put a name");
    } else if(description == '') {
        alert("Please put a description");
    } else if(assignedTo == '') {
        alert("Please put a assigned to");
    } else if(dueDate == '') {
        alert("Please put the task's due date");
    } else {
        taskMan.render();
    }
    
});
console.log(`Current list of tasks: ${taskMan.tasks}`);

