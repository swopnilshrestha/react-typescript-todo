import React, { useState } from "react";
import {
  deleteObjectArrayAtIndex,
  getIndex,
  updateObjectArrayAtIndex,
} from "../utils/ArrayUtils";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const Todo = () => {
  const [tasks, setTasks] = useState<any[]>([]);
  const [dataToUpdate, setDataToUpdate] = useState({});

  const addTask = (data: any) => {
    const payload = [...tasks, data];
    setTasks(payload);
  };

  const updateTask = (data: any) => {
    const index = getIndex(tasks, data);
    const updatedArray = updateObjectArrayAtIndex(tasks, index, data);
    setTasks(updatedArray);
  };

  const handleTaskUpdateClick = (item: Object) => {
    setDataToUpdate(item);
  };

  const handleTaskDeleteClick = (item: any) => {
    const index = tasks.findIndex((x) => x.id === item.id);
    let newArr = deleteObjectArrayAtIndex(tasks, index);
    setTasks(newArr);
  };

  return (
    <div>
      <div className="card">
        <h5 className="card-title mt-2">Todo Form</h5>
        <div className="row justify-content-md-center">
          <TodoForm
            handleAddTask={addTask}
            handleUpdateTask={updateTask}
            dataToUpdate={dataToUpdate}
          ></TodoForm>
        </div>
      </div>
      <div className="card mt-3">
        <TodoList
          tasks={tasks}
          handleTaskUpdateClick={(item: Object) => handleTaskUpdateClick(item)}
          handleTaskDeleteClick={(item: Object) => handleTaskDeleteClick(item)}
        />
      </div>
    </div>
  );
};

export default Todo;
