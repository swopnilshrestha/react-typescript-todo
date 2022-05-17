import classNames from "classnames";
import { FormikErrors, FormikTouched, useFormik } from "formik";
import { FC, useEffect, useState } from "react";
import { TodoFormValidationSchema } from "../schemas/todoFormValidation.schema";
import { ITodoProps } from "../types/todo.types";
import { ITodoData } from "../types/todoData.types";

const TodoForm: FC<ITodoProps> = ({
  handleAddTask,
  handleUpdateTask,
  dataToUpdate,
}) => {
  const isUpdating = !!dataToUpdate?.id;

  const [formValues, setFormValues] = useState<ITodoData | undefined>({
    todoItem: "",
    isCompleted: false,
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      todoItem: "",
      isCompleted: false,
    }, // <==== this object cannot be replaced with "formValues" i.e. state
    validationSchema: TodoFormValidationSchema,
    onSubmit: (values: ITodoData, { resetForm }): void => {
      const payload: ITodoData = {
        ...values,
        id: isUpdating ? dataToUpdate?.id : generateRandomId(),
      };
      submitForm(payload);
      resetForm({ values: { todoItem: "", isCompleted: false } });
    },
  });

  const submitForm = (payload: ITodoData): void => {
    if (!isUpdating) handleAddTask(payload);
    else handleUpdateTask(payload);
  };

  const generateRandomId = (): string => {
    return Math.random().toString();
  };

  const handleCheckboxChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const isChecked = event.target.checked;
  };

  const renderCheckbox = (): JSX.Element => {
    return (
      <div className="col-3">
        <div className="form-group mx-sm-4 mb-2">
          <label htmlFor="isCompleted"></label>
          <div className="form-check">
            <input
              id="isCompleted"
              name="isCompleted"
              className="form-check-input"
              type="checkbox"
              onChange={(event) => handleCheckboxChange(event)}
            />
            <label className="form-check-label" htmlFor="defaultCheck1">
              Completed?
            </label>
          </div>
        </div>
      </div>
    );
  };

  useEffect(() => {
    setFormValues(dataToUpdate);
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
      <button type="submit" className="btn btn-primary mt-2 mb-2">
        {isUpdating ? "Update" : "Submit"}
      </button>
    </form>
  );
};

export default TodoForm;
