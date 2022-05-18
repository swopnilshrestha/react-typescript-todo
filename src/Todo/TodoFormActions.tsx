import React, { FC } from "react";
import { ITodoFormActionsProps } from "../types/todoFormActions.types";

const TodoFormActions: FC<ITodoFormActionsProps> = ({
  isUpdating,
  handleExitUpdate,
}) => {
  const onExitUpdateClick = (): void => {
    handleExitUpdate();
  };

  const renderSubmitButton = (): JSX.Element => {
    return (
      <button type="submit" className="btn btn-primary mt-2 mb-2">
        {isUpdating ? "Update" : "Submit"}
      </button>
    );
  };

  const renderExitUpdateButton = (): JSX.Element => {
    return (
      <button
        type="button"
        className="btn btn-warning mt-2 mb-2"
        onClick={() => onExitUpdateClick()}
      >
        Exit Update Mode
      </button>
    );
  };

  return (
    <>
      {renderSubmitButton()}
      {isUpdating && renderExitUpdateButton()}
    </>
  );
};

export default TodoFormActions;
