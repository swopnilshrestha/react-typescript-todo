import { Formik, useFormik } from "formik";
import React, { FC, useEffect, useState } from "react";

interface ITodoProps {
  handleAddTask: any;
  dataToUpdate: any;
}

const TodoForm: FC<ITodoProps> = ({ handleAddTask, dataToUpdate }) => {
  const isUpdating = dataToUpdate.id ? true : false;
  const cleanFormValues = { todoItem: "", isCompleted: false };
  const [formValues, setFormValues] = useState({
    todoItem: "",
    isCompleted: false,
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: formValues,
    onSubmit: (values, { resetForm }) => {
      const payload = {
        ...values,
        id: Math.random().toString(),
      };
      handleAddTask(payload);
      resetForm({ values: { todoItem: "", isCompleted: false } });
    },
  });

  const getClassForInput = () => {
    const customClass = isUpdating ? "col-9" : "col-12";
    return customClass;
  };

  const handleCheckboxChange = (event: any) => {
    const isChecked = event.target.checked;
  };

  const renderCheckbox = () => {
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
        <div className={getClassForInput()}>
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
