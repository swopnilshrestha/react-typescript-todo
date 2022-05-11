import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const Todo = () => {
  const [tasks, setTasks] = useState<any[]>([]);
  const [dataToEdit, setDataToEdit] = useState({});

  const addTask = (data: any) => {
    const taskList = {
      ...data,
      id: Math.random().toString(),
    };
    const list: any = [...tasks];
    list.push(taskList);
    setTasks(list);
    console.log(list);
  };

  const handleTaskCompleteClick = (id: any) => {
    const index = tasks.findIndex((x) => x.id === id);
    const newState = Object.assign({}, tasks);
    newState[index].isCompleted = !newState[index].isCompleted;
    setTasks(newState);
  };

  const handleTaskEditClick = (id: any) => {
    const index = tasks.findIndex((x) => x.id === id);
    console.log(tasks[index]);
    setDataToEdit(tasks[index]);
  };

  const handleTaskDeleteClick = (id: any) => {
    const index = tasks.findIndex((x) => x.id === id);
    const newState = Object.assign({}, tasks);
    if (index !== -1) tasks.splice(index, 1);
    setTasks(newState);
  };

  return (
    <div>
      <div className="card">
        <h5 className="card-title mt-2">Todo Form</h5>
        <div className="row justify-content-md-center">
          <TodoForm setTasks={addTask} dataToEdit={dataToEdit}></TodoForm>
        </div>
      </div>
      <div className="card mt-3">
        <TodoList
          tasks={tasks}
          handleTaskCompleteClick={(id: any) => handleTaskCompleteClick(id)}
          handleTaskEditClick={(id: any) => handleTaskEditClick(id)}
          handleTaskDeleteClick={(id: any) => handleTaskDeleteClick(id)}
        />
      </div>
    </div>
  );
};

export default Todo;
