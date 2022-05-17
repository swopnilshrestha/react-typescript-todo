import { ITodoData } from "./todoData.types";

export interface ITodoProps {
  handleAddTask: (data: any) => void;
  handleUpdateTask: (data: any) => void;
  dataToUpdate?: ITodoData;
}
