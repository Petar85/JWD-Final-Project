// Creating a variable of the TaskManager class
let taskMan = new TaskManager(0);


// Hard coded tasks (that the user did not put)
taskMan.addTask('Dusting', 'Dust off the desk.', 'Lisa', 'Dec 13', 'In progress');
taskMan.addTask('Laundry', 'Fold the clean clothes.', 'John', 'Dec 14', 'In progress');
taskMan.addTask('Dishes', 'Load the dishwasher.', 'Kate', 'Dec 15', 'In progress');
taskMan.addTask('Floor', 'Mop and vacum the floors.', 'Bobby', 'Dec 16', 'In progress');
taskMan.addTask('Generation', 'Graduate the Generation class.', 'Students', 'Dec 17', 'In progress');


// Getting the id of the submit button
let submitButton = document.getElementById("submitButton");


// Code to execute when the submit button is clicked
submitButton.addEventListener("click", (event) => {

    // Prevents the webpage from reloading (which loses all saved tasks)
    event.preventDefault();


    // Grabs the user's inputs from the form
    // Example: if the user typed in "Dave" as their name, 
    // the variable 'name' will be = "Dave".
    let name = document.getElementById('name').value;
    let description = document.getElementById('description').value;
    let assignedTo = document.getElementById('assignedTo').value;
    let dueDate = document.getElementById('dueDate').value;

    
    // Form validation (So that no information is missing)
    if (name == '') {
        alert("Please put a name");
    } else if(description == '') {
        alert("Please put a description");
    } else if(assignedTo == '') {
        alert("Please put who it's assigned to");
    } else if(dueDate == '') {
        alert("Please put the task's due date");
    } else {
        // If the form was filled out correctly (No alerts were sent to the user), 
        // add the task that the user submitted.
        taskMan.addTask(name, description, assignedTo, dueDate, "In Progress");
        // Then render the page (Be able to display the task cards at the bottom of the webpage)
        taskMan.render();
    }
    
});