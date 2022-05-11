import TodoListActions from "./TodoListActions";
import TodoListStatus from "./TodoListStatus";

const TodoList = ({
  tasks,
  handleTaskCompleteClick,
  handleTaskEditClick,
  handleTaskDeleteClick,
}: any) => {
  const onTaskCompleteClick = (itemId: any) => {
    handleTaskCompleteClick(itemId);
  };

  const onTaskEditClick = (itemId: any) => {
    handleTaskEditClick(itemId);
  };

  const onTaskDeleteClick = (itemId: any) => {
    handleTaskDeleteClick(itemId);
  };

  const renderContent = (item: any) => {
    return (
      <>
        <li
          className="list-group-item d-flex justify-content-between align-items-start"
          key={item.id}
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">{item.todoItem}</div>
          </div>

          <div className="col-2 mt-1">
            <TodoListStatus item={item}></TodoListStatus>
          </div>

          <TodoListActions
            item={item}
            onTaskCompleteClick={(itemId: number) =>
              onTaskCompleteClick(itemId)
            }
            onTaskEditClick={onTaskEditClick}
            onTaskDeleteClick={onTaskDeleteClick}
          ></TodoListActions>
        </li>
      </>
    );
  };

  let content =
    tasks && tasks.length > 0 ? (
      tasks.map((item: any) => renderContent(item))
    ) : (
      <span>No entries found!</span>
    );

  return (
    <div>
      <h5 className="card-title mt-2">Todo List</h5>
      <div className="row">
        <div className="col">
          <ol className="list-group list-group-numbered">
            {tasks.map((item: any) => renderContent(item))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
