import React from "react";

const TodoListActions = ({
  item,
  onTaskCompleteClick,
  onTaskEditClick,
  onTaskDeleteClick,
}: any) => {
  return (
    <>
      <div className="col-1">
        <button
          className="btn btn-success text-nowrap"
          onClick={() => onTaskCompleteClick(item.id)}
        >
          Complete
        </button>
      </div>
      <div className="col-1">
        <button
          className="btn btn-primary"
          onClick={() => onTaskEditClick(item.id)}
        >
          Edit
        </button>
      </div>
      <div className="col-1">
        <button
          className="btn btn-danger"
          onClick={() => onTaskDeleteClick(item.id)}
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default TodoListActions;
