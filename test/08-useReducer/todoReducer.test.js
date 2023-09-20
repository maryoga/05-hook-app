import { todoReducer } from '../../src/08-useReducer/todoReducer';

describe('Test on todoReducer', () => {

    const initialState = [{
        id: 1,
        description: 'Demo Todo',
        done: false
    }];

    // Enviamos el estado inicial y un objeto vacío a la acción del todoReducer
    test('Must return the initial state', () => {
        const newState = todoReducer( initialState, {});
        expect(newState).toBe(initialState);
    });

    // probar un Todo
    test(' Must add a todo', () => {
        
        const action = {
            type: '[TODO] Add Todo',
            payload: {
                id: 2,
                description: 'Nuevo todo #2',
                done: false
            }
        };

        const newState = todoReducer( initialState, action );
        expect( newState.length ).toBe( 2 );
        // el toContain es util porque nos ayuda a validar que el el arreglo newState tenga el objeto
        expect( newState ).toContain( action.payload );

    });

    test('Must delete a TODO', () => {

        const action = {
            type: '[TODO] Remove Todo',
            payload: 1
        };

        const newState = todoReducer( initialState, action );
        expect( newState.length ).toBe( 0 );
    });

    test('Must make Toggle Todo', () => {
        
        const action = {
            type: '[TODO] Toggle Todo',
            payload: 1
        };

        const newState = todoReducer( initialState, action );
        expect( newState[0].done ).toBe( true );

        const newState2 = todoReducer( newState, action );
        expect( newState2[0].done ).toBe( false );

    });

});



