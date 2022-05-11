import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home/Home";
import Todo from "./Todo/Todo";

function App() {
  return (
    <div className="App container mt-3">
      <h3>Todo Application</h3>
      <div className="row justify-content-md-center">
        <div className="col align-self-center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="todo" element={<Todo />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
