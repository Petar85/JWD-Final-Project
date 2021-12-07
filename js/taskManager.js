function createTaskHtml(name, description, assignedTo, dueDate, status) {
  const htmlForTask = `  
  <div class="row align-items-center">
    <div class="col"> 
      <h1 class="display-4"></h1>      
      <div class="card mx-auto" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Task </h5>
          <h6 class="card-subtitle mb-2 text-muted">Card </h6>
          <p class="card-text">${name} ${description} ${assignedTo} ${dueDate} ${status}</p>
          <span class="badge badge-pill badge-success">Success</span>
          <button type="button" class="btn btn-outline-primary">Primary</button>
        </div>
      </div> 
    </div>
  </div>
  <br>`
  return htmlForTask;
}

class TaskManager {
  constructor(currentID) {
    this.tasks = [];

    this.currentID = 0;
    
  // End of constructor
  }

  // name is the title of the description
  addTask(name, description, assignedTo, dueDate) {
    const task = {
      name: name,
      description: description,
      assignedTo: assignedTo,
      dueDate: dueDate,
      status: 'TODO',
      id: this.currentID + 1,
    };
    this.tasks.push(task);
  }

// End of TaskManager Class
}

// Task 4 Testing
// let task1 = new TaskManager(1);
// task1.addTask('john', 'wash clothes', 'dwladjad', 'jan14');
// console.log(task1.tasks);

//Task 5 Testing
let taskHtml = createTaskHtml('John', 'laundry', 'unknown', 'wednesday', 'in progress');
console.log(taskHtml);
