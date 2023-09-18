

const initialState = [{
    id: 1,
    todo: 'Recolectar la piedra del alma',
    done: false,
}];

const todoReducer = ( state = initialState, action = {} ) => {

    // si la accion es la condición, hacer return de un nuevo estado, desestructurando el estado anterior y agregar nueva accion
    if( action.type === '[TODO] add todo' ){
        return [ ...state, action.payload ];
    }
    return state;
}

let todos = todoReducer();

const newTodo = {
    id: 2,
    todo: 'Recolectar la datos de cocina',
    done: false,
}

const addTodoAction = {
    type: '[TODO] add todo',
    payload: newTodo,    
}

todos = todoReducer( todos, addTodoAction );

console.log({state: todos });