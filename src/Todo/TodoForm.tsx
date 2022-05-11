import { Formik, useFormik } from "formik";
import React, { FC, useEffect } from "react";

type editData = {
  id: number;
  isCompleted: boolean;
  todoItem: string;
};

interface ITodoProps {
  handleAddTask: any;
  dataToEdit: any;
}

const TodoForm: FC<ITodoProps> = ({ handleAddTask, dataToEdit }) => {
  const formik = useFormik({
    initialValues: {
      todoItem: "",
      isCompleted: false,
    },
    onSubmit: (values) => {
      const payload = {
        ...values,
        id: Math.random().toString(),
      };

      console.log(payload);
      handleAddTask(payload);
    },
  });

  // useEffect(() => {
  //   console.log("i am here");
  //   // formik.values.isCompleted = dataToEdit.isCompleted;
  //   const data = {
  //     ...formik.values,
  //     isCompleted: dataToEdit.isCompleted || false,
  //   };
  // }, [dataToEdit]);

  const onEditDataRecieved = (data: any) => {
    console.log(data);
  };

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
