import React, { Component } from "react";
import Overview from "./components/Overview";
import uniqid from "uniqid";

class App extends Component {
  constructor() {
    super();
    this.deleteHandler = this.deleteHandler.bind(this);
    this.state = {
      task: {
        text: '', 
        id: uniqid(), 
        tno : 0,
      },
      tasks: [],
    };
  }

  handleChange = (e) => {
    this.setState({
      task: {
        text: e.target.value,
        id: this.state.task.id,
        tno : this.state.task.tno,
      },
    });
  };

  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: {
        text: '', 
        id: uniqid(),
        tno : this.state.task.tno+1,
      },
    });
  };


  deleteHandler(cname){
    this.setState({
      tasks : this.state.tasks.filter((i) => i.tno !== cname ),
      task: {
        text: '', 
        id: uniqid(),
        tno : this.state.task.tno+1,
      },
    })
  }

  render() {
    const { task, tasks } = this.state;

    return (
      <div>
        <form onSubmit={this.onSubmitTask}>
          <label htmlFor="taskInput">Enter task</label>
          <input
            onChange={this.handleChange}
            value={task.text}
            type="text"
            id="taskInput"
          />
          <button type="submit">Add Task</button>
        </form>
        
        <Overview tasks={tasks} handler={this.deleteHandler} />
      </div>
    );
  }
}

export default App;