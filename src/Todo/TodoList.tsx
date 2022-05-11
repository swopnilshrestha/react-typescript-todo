import TodoListActions from "./TodoListActions";
import TodoListStatus from "./TodoListStatus";

const TodoList = ({
  tasks,
  handleTaskCompleteClick,
  handleTaskUpdateClick,
  handleTaskDeleteClick,
}: any) => {
  const onTaskUpdateClick = (item: Object) => {
    handleTaskUpdateClick(item);
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
            onTaskUpdateClick={(item: Object) => onTaskUpdateClick(item)}
            onTaskDeleteClick={onTaskDeleteClick}
          ></TodoListActions>
        </li>
      </>
    );
  };

  const renderNoTasksMessage = () => {
    return (
      <div className="alert alert-danger mt-3" role="alert">
        No tasks found!
      </div>
    );
  };

  return (
    <div>
      {tasks?.length > 0 ? (
        <>
          <h5 className="card-title mt-2">Todo List</h5>
          <div className="row">
            <div className="col">
              <ol className="list-group list-group-numbered">
                {tasks.map((item: any) => renderContent(item))}
              </ol>
            </div>
          </div>
        </>
      ) : (
        <>{renderNoTasksMessage()}</>
      )}
    </div>
  );
};

export default TodoList;
