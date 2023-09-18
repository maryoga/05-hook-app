// esto no es un functional component, será un Custom Hook

import { useEffect, useReducer } from 'react';
import { todoReducer } from '../08-useReducer/todoReducer';


// función que se encarga de cargar los 'todos'
const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodos = () => {

  // el estado inicial puede ser un arreglo vacio [] porque no tengo nada en este momento
  const [todos, dispatch] = useReducer( todoReducer, [], init );

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify( todos ));
  }, [todos])  

  const handleNewTodo = ( todo ) => {
    const action = {
      type: '[TODO] Add Todo',
      payload: todo
    }

    dispatch( action );
  }

  const handleDeleteTodo = ( id ) => {
    dispatch({
      type: '[TODO] Remove Todo',
      payload: id
    })
  }

  const handleToggleTodo = ( id ) => {
    // console.log( 'TODO', id);
    dispatch({
      type: '[TODO] Toggle Todo',
      payload: id
    })
  }



  return {
    todos,
    todosCount: todos.length,
    pendingTodos: todos.filter( todo => !todo.done ).length,
    handleDeleteTodo, 
    handleToggleTodo,
    handleNewTodo,
  }
}
