import React, {Component} from 'react';
import './App.css';
import AddTaskForm from "./components/AddTaskForm";
import nanoid  from 'nanoid'
import Task from "./components/Task";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: [],
      currentTask: ''
    };
  }

  deleteTask = (id) => {
    this.id = id;
    let oldTasks = [...this.state.tasks]
    let tasks = oldTasks.filter(task => task.id !== id)
    this.setState({tasks: tasks});
  };

  addTask = () => {
    let task = {};
    task.id = nanoid();
    task.text = this.state.currentTask;
    let tasks = [...this.state.tasks];
    tasks.push(task)
    this.setState({tasks: tasks});
  };

  changeCurrentTask = (task) => {
    this.setState({currentTask: task})
  };

  render() {
    const tasks = this.state.tasks.map(task =>
      <Task key={task.id} id={task.id} deleteTask={this.deleteTask} title={task.text} />
    );
    return (
        <div className="App">
          <AddTaskForm addTask={this.addTask} title={this.state.currentTask} changeTask={this.changeCurrentTask}/>
          {tasks}
        </div>

    );

  }

}



export default App;