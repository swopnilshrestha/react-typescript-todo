const TodoList = ({
  tasks,
  handleTaskCompleteClick,
  handleTaskEditClick,
  handleTaskDeleteClick,
}: any) => {
  const renderAction = (todoItem: any) => {
    return (
      <>
        <div className="col-1">
          <button
            className="btn btn-success text-nowrap"
            onClick={() => handleTaskCompleteClick(todoItem)}
          >
            {todoItem.isCompleted ? "Undo" : "Complete"}
          </button>
        </div>
        <div className="col-1">
          <button
            className="btn btn-primary"
            onClick={() => handleTaskEditClick(todoItem.id)}
          >
            Edit
          </button>
        </div>
        <div className="col-1">
          <button
            className="btn btn-danger"
            onClick={() => handleTaskDeleteClick(todoItem.id)}
          >
            Delete
          </button>
        </div>
      </>
    );
  };

  const renderTodoItem = (item: any) => {
    return (
      <li
        className="list-group-item d-flex justify-content-between align-items-start"
        key={item.id}
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">{item.todoItem}</div>
        </div>

        <div className="col-2 mt-1">
          <h5>
            {item.isCompleted && (
              <span className="badge alert-success">Completed</span>
            )}
            {!item.isCompleted && (
              <span className="badge alert-warning">Pending</span>
            )}
          </h5>
        </div>

        {renderAction(item)}
      </li>
    );
  };

  return (
    <div>
      {tasks.length > 0 ? (
        <>
          <h5 className="card-title mt-2">Todo List</h5>
          <div className="row">
            <div className="col">
              <ol className="list-group list-group-numbered">
                {tasks.map((item: any) => renderTodoItem(item))}
              </ol>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default TodoList;
