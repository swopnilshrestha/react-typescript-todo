import React, { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const Todo = () => {
  const [tasks, setTasks] = React.useState<any[]>([]);
  const [dataToEdit, setDataToEdit] = useState({});

  const addTask = (data: any) => {
    const payload = [...tasks, data];
    setTasks(payload);
  };

  const handleTaskCompleteClick = (item: any) => {
    const updateData = {
      ...item,
      isCompleted: !item.isCompleted,
    };

    const index = tasks.findIndex((task) => task.id === item.id);

    const newArr = [
      ...tasks.slice(0, index),
      updateData,
      ...tasks.slice(index + 1),
    ];

    console.log("after update", newArr);
    setTasks(newArr);
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
          <TodoForm handleAddTask={addTask} dataToEdit={dataToEdit}></TodoForm>
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
