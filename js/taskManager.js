// This will create a task in HTML and return it.
function createTaskHtml(name, description, assignedTo, dueDate, status, id) {
  
  // Template to create a single task in HTML code.
  const html =   
  `<div class="row align-items-center">
    <div class="col"> 
      <h1 class="display-4"></h1>      
      <div class="card mx-auto" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Task Number ${id}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${name}</h6>
          <p class="card-text"><b>Description:</b> ${description}<br><b>Assigned To:</b> ${assignedTo}</p>
          <span class="badge badge-pill badge-success">${status}</span>
          <button type="button" class="btn btn-outline-primary">${dueDate}</button>
          <button type="button" class="btn btn-success done-button">Mark As Done</button>
        </div>
      </div> 
    </div>
  </div>
  <br>`

  // Returns what was made in the variable 'html'
  return html;

//End of createTaskHtml();
}


// TaskManager class
class TaskManager {

  // The constructor: holds information that the TaskManager needs.
  constructor(currentID) {
    // This will contain ALL of the tasks
    this.tasks = [];
    // The id will identify each task to a number.
    this.currentID = 0;
    this.currentID = currentID;
    
  //End of constructor
  }


  // This will add a single task [to the list of tasks in the constructor]
  addTask(name, description, assignedTo, dueDate, status) {
    
    // Creates a task object
    const task = {
      name: name,
      description: description,
      assignedTo: assignedTo,
      dueDate: dueDate,
      status: status,
      id: this.currentID,

    //End of addTask
    };

    // Increment the ID (so that the next task will not have
    // the same ID as the previous task)
    this.currentID++;

    // Push the task to the list of tasks in the constructor
    this.tasks.push(task);

  //End of addTask();
  }

  // The render() method takes the tasks from the TaskManager constructor,
  // and it will display it to the browser.
  render() {

    // Variable that contains a list of tasks in HTML format.
    let tasksHtmlList = [];

    // Loop to iterate over EVERY task that has been created so far.
    for (let taskNumber = 0; taskNumber < this.tasks.length; taskNumber++) {
      let currentTask = this.tasks[taskNumber];
      
      //BUG: Code below did not work, it sets the year to 2001
      // let date = new Date(currentTask.dueDate);

      // Code to format the date (to be readable in the task cards)
      let date = currentTask.dueDate;
      let formattedDate = `Due date: ${date}`;

      // Will grab a task, and turn it into HTML format.
      let taskHtml = createTaskHtml(currentTask.name, currentTask.description, currentTask.assignedTo, formattedDate, currentTask.status, taskNumber+1); 
      
      // Pushes the HTML formatted task to tasksHtmlList
      tasksHtmlList.push(taskHtml);
    }

    // Joins the array, so that all the items in the array
    // will combine and convert into a single string
    let tasksHtml = tasksHtmlList.join('\n');

    // Replaces the code in <div id="cardList"></div> from the
    // index.html file, to contain the proper task cards.
    const cardText = document.getElementById("cardList");
    cardText.innerHTML = tasksHtml;
    
  }

//End of TaskManager Class
}
