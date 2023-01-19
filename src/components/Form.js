import React, { useEffect } from "react";
import { v4 as uuid } from "uuid";

function Form1({ input, setinput, todos, settodos, edittodo, setEditTodo }) {
  const updatetoDo = (title, id, completed) => {
    const newtodo = todos.map((todo) =>
      todo.id === id ? { title, id, completed } : todo
    );
    settodos(newtodo);
    setEditTodo("");
  };
  useEffect(() => {
    if (edittodo) {
      setinput(edittodo.title);
    } else {
      setinput(" ");
    }
  }, [setinput, edittodo]);

  const handlechange = (event) => {
    setinput(event.target.value);
  };

  const onFormsubmit = (event) => {
    event.preventDefault();
    if (!edittodo) {
      settodos([...todos, { id: uuid(), title: input, completed: false }]);
      setinput("");
    } else {
      updatetoDo(edittodo.title, edittodo.id, edittodo.completed);
    }
  };
  return (
    <form onSubmit={onFormsubmit}>
      <input
        type="text"
        placeholder="Enter your name..."
        className="task-input"
        value={input}
        required
        onChange={handlechange}
      />
      <button className="button-add" type="submit">
        {edittodo ? "OK" : "Add"}
      </button>
    </form>
  );
}
export default Form1;
