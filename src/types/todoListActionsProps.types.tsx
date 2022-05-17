import { ITodoData } from "./todoData.types";

export interface ITodoListActionsProps {
  item: ITodoData;
  onTaskUpdateClick: (data: ITodoData) => void;
  onTaskDeleteClick: (data: ITodoData) => void;
}
