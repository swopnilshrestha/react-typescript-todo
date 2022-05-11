import { Formik, useFormik } from "formik";
import React, { FC, useEffect } from "react";

type editData = {
  id: number;
  isCompleted: boolean;
  todoItem: string;
};

interface ITodoProps {
  setTasks: any;
  dataToEdit: any;
}

const TodoForm: FC<ITodoProps> = ({ setTasks, dataToEdit }) => {
  const formik = useFormik({
    initialValues: {
      todoItem: "",
      isCompleted: false,
    },
    onSubmit: (values) => {
      values.isCompleted = false;
      setTasks(values);
    },
  });

  useEffect(() => {
    console.log(formik.values, dataToEdit.isCompleted);
    formik.values.isCompleted = dataToEdit.isCompleted;

    console.log(formik.values, dataToEdit.isCompleted);
  }, [dataToEdit]);

  return (
    <form onSubmit={formik.handleSubmit}>
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
      <button type="submit" className="btn btn-primary mt-2 mb-2">
        Submit
      </button>
    </form>
  );
};

export default TodoForm;
