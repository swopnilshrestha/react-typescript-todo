import classNames from "classnames";
import { FC } from "react";
import { ITodoListStatusProps } from "../types/todoListStatus.types";

const TodoListStatus: FC<ITodoListStatusProps> = ({ isCompleted }) => {
  return (
    <h5>
      <span
        className={classNames("badge", {
          "alert-success": isCompleted,
          "alert-warning": !isCompleted,
        })}
      >
        {isCompleted ? "Completed" : "Pending"}
      </span>
    </h5>
  );
};

export default TodoListStatus;
