import React, { FC } from "react";
import { ITodoListActionsProps } from "../types/todoListActionsProps.types";

const TodoListActions: FC<ITodoListActionsProps> = ({
  item,
  onTaskUpdateClick,
  onTaskDeleteClick,
}) => {
  return (
    <>
      <div className="col-1">
        <button
          className="btn btn-primary"
          onClick={() => onTaskUpdateClick(item)}
        >
          Update
        </button>
      </div>
      <div className="col-1">
        <button
          className="btn btn-danger"
          onClick={() => onTaskDeleteClick(item)}
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default TodoListActions;
