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

let task1 = new TaskManager(1);
task1.addTask('john', 'wash clothes', 'dwladjad', 'jan14');
console.log(task1.tasks);