import { FC } from "react";
import { ITodoData } from "../types/todoData.types";
import { ITodoListProps } from "../types/todoListProps.types";
import TodoListActions from "./TodoListActions";
import TodoListStatus from "./TodoListStatus";

const TodoList: FC<ITodoListProps> = ({
  tasks,
  handleTaskUpdateClick,
  handleTaskDeleteClick,
}: any) => {
  const onTaskUpdateClick = (item: ITodoData): void => {
    handleTaskUpdateClick(item);
  };

  const onTaskDeleteClick = (item: ITodoData): void => {
    handleTaskDeleteClick(item);
  };

  const renderContent = (item: ITodoData): JSX.Element => {
    return (
      <li
        className="list-group-item d-flex justify-content-between align-items-start"
        key={item.id}
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">{item.todoItem}</div>
        </div>
        <div className="col-2 mt-1">
          <TodoListStatus isCompleted={item.isCompleted}></TodoListStatus>
        </div>
        <TodoListActions
          item={item}
          onTaskUpdateClick={(item: ITodoData) => onTaskUpdateClick(item)}
          onTaskDeleteClick={(item: ITodoData) => onTaskDeleteClick(item)}
        ></TodoListActions>
      </li>
    );
  };

  const renderNoTasksMessage = (): JSX.Element => {
    return (
      <div className="alert alert-danger mt-3" role="alert">
        No tasks found!
      </div>
    );
  };

  return (
    <div>
      {tasks?.length > 0 ? (
        <>
          <h5 className="card-title mt-2">Todo List</h5>
          <div className="row">
            <div className="col">
              <ol className="list-group list-group-numbered">
                {tasks.map((item: ITodoData) => renderContent(item))}
              </ol>
            </div>
          </div>
        </>
      ) : (
        <>{renderNoTasksMessage()}</>
      )}
    </div>
  );
};

export default TodoList;
