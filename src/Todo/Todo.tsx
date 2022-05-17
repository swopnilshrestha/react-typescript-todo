import React, { useState } from "react";
import { ITodoData } from "../types/todoData.types";
import {
  deleteObjectArrayAtIndex,
  getIndex,
  updateObjectArrayAtIndex,
} from "../utils/ArrayUtils";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const Todo = () => {
  const [tasks, setTasks] = useState<any[]>([]);
  const [dataToUpdate, setDataToUpdate] = useState<ITodoData | undefined>();

  const addTask = (data: ITodoData): void => {
    const payload = [...tasks, data];
    setTasks(payload);
  };

  const updateTask = (data: ITodoData): void => {
    const index = getIndex(tasks, data);
    const updatedArray = updateObjectArrayAtIndex(tasks, index, data);
    setTasks(updatedArray);
  };

  const handleTaskUpdateClick = (item: ITodoData): void => {
    setDataToUpdate(item);
  };

  const handleTaskDeleteClick = (item: ITodoData): void => {
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
          handleTaskUpdateClick={(item: ITodoData) =>
            handleTaskUpdateClick(item)
          }
          handleTaskDeleteClick={(item: ITodoData) =>
            handleTaskDeleteClick(item)
          }
        />
      </div>
    </div>
  );
};

export default Todo;
