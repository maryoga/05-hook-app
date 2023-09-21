export const TodoItem = ( { todo, onDeleteTodo, onToggleTodo } ) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span 
        className={`align-self-center ${ (todo.done) ? 'text-decoration-line-through' : '' }`}
        onClick={ () => onToggleTodo( todo.id ) }
        // define el span que quiero buscar, usualmente cuando queremos especificar algo podemos usar el textid o el aria-label
        aria-label="span"
      >
        { todo.description }
      </span>
      <button
        className="btn btn-danger"
        data-testid = "btnDelete"
        onClick={ () => onDeleteTodo( todo.id ) }
      >
        Delete
      </button>
    </li>
  );
};
