import React from "react";
import * as AiIcons from "react-icons/ai";

function Toddolist({ todos, settodos, setEditTodo }) {
  const handlecomplete = (todo) => {
    settodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };
  const handleedit = ({ id }) => {
    const findtodo = todos.find((todo) => todo.id === id);
    setEditTodo(findtodo);
  };
  const handledelte = ({ id }) => {
    const newlist = todos.filter((todo) => todo.id !== id);
    settodos(newlist);
  };
  return (
    <div>
      {todos.map((todo) => (
        <li className="list-item" key={todo.id}>
          <input
            type="text"
            value={todo.title}
            className={`list $(todo.completed ? "complete": " ")`}
            onChange={(event) => event.preventDefault()}
          />
          <div>
            <button className="button-complete task-button">
              <AiIcons.AiFillCheckCircle
                className="fa fa-check"
                onClick={() => handlecomplete(todo)}
              />
            </button>
            <button
              className="button-edit task-button"
              onClick={() => handleedit(todo)}
            >
              <AiIcons.AiFillEdit className="fa fa-edit" />
            </button>
            <button
              className="button-delete task-button"
              onClick={() => handledelte(todo)}
            >
              <AiIcons.AiFillDelete className="fa fa-trash" />
            </button>
          </div>
        </li>
      ))}
    </div>
  );
}
export default Toddolist;
