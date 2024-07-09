import React, { useEffect, useState } from "react";
import "./Styles/DisplayStyle.css"

const TodoDisplay = ({ id, item, index, deleteTodo, setTodos, todos }) => {
  const [edit, setEdit] = useState(false);
  const [editTask, setEditTask] = useState(item.title);
  const [editDescription, setEditDescription] = useState(item.description);
  // const [completed, setCompleted] = useState(item.completed);
  const [status, setStatus] = useState(item.completed);

  useEffect(() => {
    setEditTask(item.title);
    setEditDescription(item.description);
    setStatus(item.completed);
  }, [item]);

  const handleSelect = (e) => {
    const updatedStatus = e.target.value === "Completed";
    console.log("Updated Status: ",updatedStatus);
    setStatus(updatedStatus);
    
  };

  function handleEdit() {
    setEdit(true);
  }

  const handleSave = () => {
    setEdit(false);
    const UpdatedTodos = todos.map((todo) => {
      if (todo.id === item.id) {
        return {
          ...todo,
          title: editTask,
          description: editDescription,
          completed: status,
        };
      }
      return todo;
    });
    setTodos(UpdatedTodos);
  };

  const handleCancel = () => {
    // deleteTodo(item.id);
    setEdit(false);
    setEditTask(item.title);
    setEditDescription(item.description);
    setStatus(item.completed);
  };

  return (
    <>
      <div key={index}>
        <div className="card h-100" id="cards">
          <div className="card-body">
            <h3 className="card-title text-center">Task {item.id}</h3>
            {edit ? (
              <div>
                <form action="">
                  <input
                    type="text"
                    className="form-control"
                    style={{ margin: "0em 0em 0.2em" }}
                    value={editTask}
                    placeholder="New Task"
                    required
                    onChange={(e) => setEditTask(e.target.value)}
                  />
                  <input
                    type="text"
                    className="form-control"
                    style={{ margin: "0.2em 0em 0" }}
                    value={editDescription}
                    placeholder="New Description"
                    required
                    onChange={(e) => setEditDescription(e.target.value)}
                  />
                </form>
              </div>
            ) : (
              <>
                <h5
                  className="card-title"
                  id="text-title"
                  style={{ margin: "0em 0em 0.5em" }}
                >
                  Title: {item.title}
                </h5>
                <h5
                  className="card-description"
                  style={{ margin: "0em 0em 1em" }}
                >
                  Description: {item.description}
                </h5>
              </>
            )}
            <div style={{ margin: "1em 0em" }}>
              <b>Status:</b>
              <select
                className="dropdown-toggle ms-2"
                name=""
                id="card-dropdown"
                onChange={handleSelect}
                value={status ? "Completed" : "Not Completed"}
              >
                <option value="Completed">Completed</option>
                <option value="Not Completed">Not Completed</option>
              </select>
             
            </div>
            <div
              className="d-flex justify-content-end"
              id="btndiv"
              style={{ margin: "1em 0em" }}
            >
              {edit ? (
                <>
                  <button
                    className="btn btn-primary"
                    onClick={handleSave}
                    style={{ margin: "0em 1em" }}
                  >
                    Save
                  </button>
                  <button
                    className="btn btn-secondary"
                    onClick={handleCancel}
                    style={{ margin: "0em 1em" }}
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <button
                    className="btn btn-success"
                    onClick={handleEdit}
                    style={{ margin: "0em 1em" }}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteTodo(item.id)}
                    style={{ margin: "0em 1em" }}
                  >
                    Delete
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoDisplay;
