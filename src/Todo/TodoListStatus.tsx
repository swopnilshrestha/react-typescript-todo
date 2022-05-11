import React from "react";

const TodoListStatus = ({ item }: any) => {
  return (
    <>
      <h5>
        {item.isCompleted && (
          <span className="badge alert-success">Completed</span>
        )}
        {!item.isCompleted && (
          <span className="badge alert-warning">Pending</span>
        )}
      </h5>
    </>
  );
};

export default TodoListStatus;
