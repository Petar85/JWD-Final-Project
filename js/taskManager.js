class TaskManager {
  constructor(currentID = 0) {
    this.tasks = {

    // End of this.tasks
    }
    this.currentID = currentID;
    


  // End of constructor
  }

  // name is the title of the description
  addTask(name, description, assignedTo, dueDate, status = 'TODO') {
    this.name = name;
    this.description = description;
    this.assignedTo = assignedTo;
    this.dueDate = dueDate;
    this.status = status;
    this.currentID = this.currentID + 1;
  }



// End of TaskManager Class
}
