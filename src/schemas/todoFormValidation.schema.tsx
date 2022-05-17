import * as Yup from "yup";

export const TodoFormValidationSchema = Yup.object({
  todoItem: Yup.string().required("This field is required."),
});
