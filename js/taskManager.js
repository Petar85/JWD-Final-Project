// This will create a task in HTML (Visually updates the website)
function createTaskHtml(name, description, assignedTo, dueDate, status, id) {
  const html = `  
  <div class="row align-items-center">
    <div class="col"> 
      <h1 class="display-4"></h1>      
      <div class="card mx-auto" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Task ${id}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${name}</h6>
          <p class="card-text">Description: ${description}\n Assigned To: ${assignedTo}</p>
          <span class="badge badge-pill badge-success">${status}</span>
          <button type="button" class="btn btn-outline-primary">${dueDate}</button>
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

    this.currentID = 0;
    
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
  }

  render() {
    let tasksHtmlList = [];
    for (let taskNumber = 0; taskNumber < this.tasks.length; taskNumber++) {
      let currentTask = this.tasks[taskNumber];
      let date = new Date(currentTask.dueDate);
      let formattedDate = `Due date: ${date}`;
      let taskHtml = createTaskHtml(currentTask.name, currentTask.description, currentTask.assignedTo, formattedDate, currentTask.status); 
      tasksHtmlList.push(taskHtml);
    }
    console.log(`This is the task HTML List ${tasksHtmlList}`);
    let tasksHtml = tasksHtmlList.join('\n');
    console.log(`1234 : ${tasksHtml}`);
    const cardList = document.getElementById("cardList");
    cardList.innerHTML = tasksHtml;
  }

// End of TaskManager Class
}

// TESTING:

// //Task 4 Testing
  // This will create a new task, and save it into an array of tasks
// let task1 = new TaskManager(1);
// task1.addTask('john', 'wash clothes', 'dwladjad', 'jan14');
// console.log(task1.tasks);

