import { useEffect } from "react";
import React, { useState } from "react";
import TodoList from "./components/TodoList";
import TodoDisplay from "./components/TodoDisplay";
import Filtering from "./components/Filtering";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [view, setView] = useState("All");
  const [filtered, setFiltered] = useState([]);

  const addTodoData = (newTask, newDescription) => {
    let newData = {
      id: todos.length + 1,
      title: newTask,
      description: newDescription,
      completed: false,
    };
    setTodos([...todos, newData]);
    console.log("added");
  };

  // Delete Todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // DropDown status display
  const handleViewChange = (event) => {
    setView(event.target.value);
  };

  useEffect(() => {
    if (view === "All") {
      setFiltered(todos);
    }
   else if (view === "Completed") {
      setFiltered(todos.filter((todo) => todo.completed === true));
    } else {
      setFiltered(todos.filter((todo) => todo.completed === false));
    }
  }, [view, todos]);

  return (
    <div>
      <TodoList addTodoData={addTodoData} />
      <Filtering handleViewChange={handleViewChange}
      />

      {/* Display Todos */}
      <div className="container">
        <div className="row gx-4 gx-lg-4 row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
          {filtered.map((item, index) => {
            return (
              <>
                <div className="col h-100 mt-3" key={item.id}>
                  <TodoDisplay
                    todos={todos}
                    item={item}
                    index={index}
                    deleteTodo={deleteTodo}
                    setTodos={setTodos}
                  />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
