import { useTodos } from '../hooks';
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';

const initialState = [];

const init = () => {
  // Parseamos que es lo opuesto del stringyfy. la 1era vez que cargamos la App esto puede ser nulo, si es nulo regreso un arreglo vacio
  return JSON.parse( localStorage.getItem('todos') ) || [];
}

export const TodoApp = () => {
  // crear un componente que se llame useTodo. Este debería exponer ciertas cosas
  // exponer los: todos, ocupariamos el handleDeletetodo, handleToggleTodo, y el handleNewTodo
  const { todos, todosCount, pendingTodos, handleDeleteTodo, handleToggleTodo, handleNewTodo } = useTodos();

  return (
    <>
      <h1>TodoApp: { todosCount }, <small>Pendientes: { pendingTodos } </small> </h1>
      <hr />

      <div className="row">
        <div className="col-7">
            <TodoList 
              todos = { todos }
              onDeleteTodo={ handleDeleteTodo }
              onToggleTodo={ handleToggleTodo }
            />
        </div>
        <div className="col-5">
            <h4>Agregar TODO</h4>
            <hr />
            <TodoAdd onNewTodo={ handleNewTodo } />
        </div>
      </div>

    </>
  );
};
