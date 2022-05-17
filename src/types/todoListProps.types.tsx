import { ITodoData } from "./todoData.types";

export interface ITodoListProps {
  tasks: Array<ITodoData>;
  handleTaskCompleteClick?: (item: ITodoData) => void;
  handleTaskUpdateClick: (item: ITodoData) => void;
  handleTaskDeleteClick: (item: ITodoData) => void;
}
