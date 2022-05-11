import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const Todo = () => {
  const [tasks, setTasks] = useState<any[]>([]);
  const [dataToUpdate, setDataToUpdate] = useState({});

  const addTask = (data: any) => {
    const payload = [...tasks, data];
    setTasks(payload);
  };

  const handleTaskCompleteClick = (id: any) => {
    const index = tasks.findIndex((x) => x.id === id);
    const newState = Object.assign({}, tasks);
    newState[index].isCompleted = !newState[index].isCompleted;
    setTasks(newState);
  };

  const handleTaskUpdateClick = (item: Object) => {
    setDataToUpdate(item);
  };

  console.log(dataToUpdate);

  const handleTaskCompleteClick1 = (item: any) => {
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
          <TodoForm
            handleAddTask={addTask}
            dataToUpdate={dataToUpdate}
          ></TodoForm>
        </div>
      </div>
      <div className="card mt-3">
        <TodoList
          tasks={tasks}
          handleTaskUpdateClick={(item: Object) => handleTaskUpdateClick(item)}
          handleTaskDeleteClick={(id: any) => handleTaskDeleteClick(id)}
        />
      </div>
    </div>
  );
};

export default Todo;
