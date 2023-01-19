import React, { useState, useEffect } from "react";
import Form1 from "./components/Form";
import Header from "./components/Header";
import "./App.css";
import Toddolist from "./components/Toddolist";
function App() {
  const initialState = JSON.parse(localStorage.getItem("todos")) || [];
  const [Input, setinput] = useState("");
  const [todos, settodos] = useState(initialState);
  const [edittodo, setEditTodo] = useState(null);
  
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <div className="container">
      <div className="app-wrapper">
        <Header />
        <div>
          <Form1
            input={Input}
            setinput={setinput}
            todos={todos}
            settodos={settodos}
            edittodo={edittodo}
            setEditTodo={setEditTodo}
          />
        </div>
        <div>
          <Toddolist
            todos={todos}
            settodos={settodos}
            setEditTodo={setEditTodo}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
