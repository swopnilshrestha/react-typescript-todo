import classNames from "classnames";
import { FormikErrors, FormikTouched, useFormik } from "formik";
import { FC, useEffect, useState } from "react";
import { TodoFormValidationSchema } from "../schemas/todoFormValidation.schema";
import { ITodoProps } from "../types/todo.types";
import { ITodoData } from "../types/todoData.types";
import TodoFormActions from "./TodoFormActions";

const TodoForm: FC<ITodoProps> = ({
  handleAddTask,
  handleUpdateTask,
  dataToUpdate,
}) => {
  const [isUpdating, setIsUpdating] = useState<boolean>(false);
  const [formValues, setFormValues] = useState<ITodoData>({
    todoItem: "",
    isCompleted: false,
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: formValues,
    validationSchema: TodoFormValidationSchema,
    onSubmit: (values: ITodoData, { resetForm }): void => {
      const payload: ITodoData = {
        ...values,
        id: isUpdating ? dataToUpdate?.id : generateRandomId(),
      };
      submitForm(payload);
      resetForm({ values: { todoItem: "", isCompleted: false } });
      resetFormView();
    },
  });

  const resetFormView = () => {
    const form = document.querySelector("form");
    form?.reset();
  };

  const submitForm = (payload: ITodoData): void => {
    if (!isUpdating) handleAddTask(payload);
    else handleUpdateTask(payload);
  };

  const generateRandomId = (): string => {
    return Math.random().toString();
  };

  const renderCheckbox = (): JSX.Element => {
    return (
      <div className="col-3">
        <div className="form-group mx-sm-4 mb-2">
          <label htmlFor="isCompleted" />
          <div className="form-check">
            <input
              id="isCompleted"
              name="isCompleted"
              className="form-check-input"
              type="checkbox"
              onChange={formik.handleChange}
            />
            <label className="form-check-label">Completed?</label>
          </div>
        </div>
      </div>
    );
  };

  const handleExitUpdate = () => {
    setIsUpdating(false);
  };

  useEffect(() => {
    if (dataToUpdate) {
      setIsUpdating(true);
      setFormValues(dataToUpdate);
    }
  }, [dataToUpdate]);

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="row">
        <div
          className={classNames({
            "col-9": isUpdating,
            "col-12": !isUpdating,
          })}
        >
          <div className="form-group mx-sm-4 mb-2">
            <label htmlFor="todoItem">Todo Item</label>
            <input
              id="todoItem"
              name="todoItem"
              type="text"
              className="form-control"
              onChange={formik.handleChange}
              value={formik.values.todoItem}
            />
          </div>
          {formik.errors.todoItem && formik.touched.todoItem ? (
            <p className="text-danger">{formik.errors.todoItem}</p>
          ) : null}
        </div>
        <>{isUpdating && renderCheckbox()}</>
      </div>
      <TodoFormActions
        isUpdating={isUpdating}
        handleExitUpdate={handleExitUpdate}
      />
    </form>
  );
};

export default TodoForm;
