import React from "react";

const TodoListActions = ({
  item,
  onTaskUpdateClick,
  onTaskDeleteClick,
}: any) => {
  return (
    <>
      {/* <div className="col-1">
        <button
          className="btn btn-success text-nowrap"
          onClick={() => onTaskCompleteClick(item.id)}
        >
          Complete
        </button>
      </div> */}
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
