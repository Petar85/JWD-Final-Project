// Creating a variable of the TaskManager class
let taskMan = new TaskManager(0);


// Hard coded tasks
taskMan.addTask('Dusting', 'Dust off the desk.', 'Lisa', 'Dec 13', 'In progress');
taskMan.addTask('Laundry', 'Fold the clean clothes.', 'John', 'Dec 14', 'In progress');
taskMan.addTask('Dishes', 'Load the dishwasher.', 'Kate', 'Dec 15', 'In progress');
taskMan.addTask('Floor', 'Mop and vacum the floors.', 'Bobby', 'Dec 16', 'In progress');
taskMan.addTask('Generation', 'Graduate the Generation class.', 'Students', 'Dec 17', 'In progress');


// Getting the id of the submit button
let submitButton = document.getElementById("submitButton");


// Code to execute when the submit button is clicked
submitButton.addEventListener("click", (event) => {

    // Prevents the webpage from reloading (loses all tasks)
    event.preventDefault();


    // Grabs the user's inputs from the form
    let name = document.getElementById('name').value;
    let description = document.getElementById('description').value;
    let assignedTo = document.getElementById('assignedTo').value;
    let dueDate = document.getElementById('dueDate').value;

    
    // Form validation
    if (name == '') {
        alert("Please put a name");
    } else if(description == '') {
        alert("Please put a description");
    } else if(assignedTo == '') {
        alert("Please put who it's assigned to");
    } else if(dueDate == '') {
        alert("Please put the task's due date");
    } else {
        // If the form was filled out correctly (No alerts), 
        // Add the task the user submitted
        taskMan.addTask(name, description, assignedTo, dueDate, "In Progress");
        // Then render the page (Be able to display the tasks at the bottom)
        taskMan.render();
    }
    
});