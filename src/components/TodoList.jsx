import { useState } from "react";
import React from "react";
import "./Styles/TodoListStyle.css";

const TodoList = ({ addTodoData }) => {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");

  const addingTask = () => {
    if (!task.trim() || !description.trim()) {
       alert("Please enter a valid task and description");
       return;
    }
    addTodoData(task, description);
    setTask("");
    setDescription("");
  };

  return (
    <>
      <section className="container">

        <div className="text-center">
          <h1 className="mt-3" id="heading">
            My ToDo
          </h1>
          <div className="row">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Task Name"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                required
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Task Description"
                value={description}
                onChange={(e)=> setDescription(e.target.value)}
                required
              />
            </div>
            <div className="col">
              <button className="btn-task" onClick={addingTask}>
                Add Task
              </button>
            </div>
          </div>
        </div>

        
      </section>
    </>
  );
};

export default TodoList;
