// This will create a task in HTML (Visually updates the website)
function createTaskHtml(name, description, assignedTo, dueDate, status) {
  const html = `  
  <div class="row align-items-center">
    <div class="col"> 
      <h1 class="display-4"></h1>      
      <div class="card mx-auto" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Task </h5>
          <h6 class="card-subtitle mb-2 text-muted">Card </h6>
          <p class="card-text">Name: ${name} \nDescription:${description} \nAssigned To:${assignedTo} \nDue Date:${dueDate} \nStatus: ${status}</p>
          <span class="badge badge-pill badge-success">Success</span>
          <button type="button" class="btn btn-outline-primary">Primary</button>
        </div>
      </div> 
    </div>
  </div>
  <br>`
  return html;
// End of htmlForTask();
}

class TaskManager {
  constructor(currentID) {
    this.tasks = [];
    console.log(this.tasks)
    this.currentID = 0;
    this.currentID = currentID;
    
  // End of constructor
  }

  // This will add a single task [to the list of tasks]
  addTask(name, description, assignedTo, dueDate, status) {
    const task = {
      name: name,
      description: description,
      assignedTo: assignedTo,
      dueDate: dueDate,
      status: status,
      id: this.currentID,
    // End of task
    };
    this.currentID++;
    this.tasks.push(task);
  // End of addTask();
    console.log(task);
  }

  render() {
    let tasksHtmlList = [];
    for (let taskNumber = 0; taskNumber < this.tasks.length; taskNumber++) {
      let currentTask = this.tasks[taskNumber];
      let date = new Date(currentTask.dueDate);
      let formattedDate = `Due date: ${date}`;
      let taskHtml = createTaskHtml(currentTask.name, currentTask.description, currentTask.assignedTo, formattedDate, currentTask.status); 
      tasksHtmlList.push(taskHtml);
      console.log(taskHtml);
    }
    let tasksHtml = tasksHtmlList.join('\n');
    const cardText = document.getElementsByClassName("card-text");
    cardText.textContent = tasksHtml;
    
  }

// End of TaskManager Class
}

// TESTING:

// //Task 4 Testing
// let task1 = new TaskManager(1);
// task1.addTask('john', 'wash clothes', 'dwladjad', 'jan14');
// console.log(task1.tasks);

//Task 5 Testing
// let taskHtml = createTaskHtml('John', 'laundry', 'unknown', 'wednesday', 'in progress');
// console.log(taskHtml);

// let taskMan = new TaskManager(0);
// console.log("Length of the task: "  + taskMan.tasks.legnth);
// taskMan.addTask('Tim', 'Laundry', 'Himself', 'October 13', 'In progress');
// taskMan.addTask('John', 'laundry', 'unknown', 'wednesday', 'in progress');
// console.log(taskMan.tasks);
// console.log("Length of the task: "  + taskMan.tasks.legnth);
// taskMan.render();
// // taskMan.render();

// // // grab user inputs
// let name = document.getElementById('name').value;
// let description = document.getElementById('description').value;
// let assignedTo = document.getElementById('assignedTo').value;
// let dueDate = document.getElementById('dueDate').value;
// // let button = document.getElementById('button').value;

// // // Submit Button
// let submitButton = document.getElementById("submitButton");
// submitButton.addEventListener("click", taskMan.addTask(name, description, assignedTo, dueDate));
// taskMan.render();
