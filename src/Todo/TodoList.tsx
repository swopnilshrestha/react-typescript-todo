const TodoList = (props: any) => {
  let tasks = props.tasks;

  const onTaskCompleteClick = (itemId: any) => {
    props.handleTaskCompleteClick(itemId);
  };

  const onTaskEditClick = (itemId: any) => {
    props.handleTaskEditClick(itemId);
  };

  const onTaskDeleteClick = (itemId: any) => {
    props.handleTaskDeleteClick(itemId);
  };

  let content =
    props && props.tasks.length > 0 ? (
      props.tasks.map((item: any) => (
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

          <div className="col-1">
            <button
              className="btn btn-success text-nowrap"
              onClick={() => onTaskCompleteClick(item.id)}
            >
              Complete
            </button>
          </div>
          <div className="col-1">
            <button
              className="btn btn-primary"
              onClick={() => onTaskEditClick(item.id)}
            >
              Edit
            </button>
          </div>
          <div className="col-1">
            <button
              className="btn btn-danger"
              onClick={() => onTaskDeleteClick(item.id)}
            >
              Delete
            </button>
          </div>
        </li>
      ))
    ) : (
      <span></span>
    );

  return (
    <div>
      <h5 className="card-title mt-2">Todo List</h5>
      <div className="row">
        <div className="col">
          <ol className="list-group list-group-numbered">{content}</ol>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
