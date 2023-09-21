import { fireEvent, render, screen } from '@testing-library/react';
import { TodoItem } from '../../src/08-useReducer/TodoItem';


describe('Test on <TodoItem />', () => {

    const todo = {
        id: 1,
        description: 'Piedra del Alma',
        done: false
    };

    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    // en cada una de nuestras pruebas se van a resetear mis evaluaciones
    beforeEach(() => jest.clearAllMocks());

    test('Must show the Todo Pending completion', () => {

        // sujeto de pruebas
        render(<TodoItem
            todo={todo}
            onToggleTodo={ onToggleTodoMock }
            onDeleteTodo={ onDeleteTodoMock }
        />
        );

        // aserción. 1ero verificar que tenemos el elemento de tipo lisitem.
        const liElement = screen.getByRole('listitem');
        expect(liElement.className).toBe('list-group-item d-flex justify-content-between');

        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toContain('align-self-center');
        expect(spanElement.className).not.toContain('text-decoration-line-through');

        //screen.debug();

    });

    test('Must show the Todo Completed', () => {
        todo.done = true;
        render(<TodoItem
            todo={todo}
            onToggleTodo={ onToggleTodoMock }
            onDeleteTodo={ onDeleteTodoMock }
        />
        );

        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toContain('text-decoration-line-through');
    });

    test('span debe de llamar el ToggleTodo cuando se hace cick', () => {
        render(<TodoItem
            todo={todo}
            onToggleTodo={ onToggleTodoMock }
            onDeleteTodo={ onDeleteTodoMock }
        />
        );

        // con este span voy a simular el clic de ese span, usamos el fireEvent( spanElement ) ya estamos haciendo clic sobre el elemento
        const spanElement = screen.getByLabelText('span');
        fireEvent.click( spanElement );

        expect( onToggleTodoMock ).toHaveBeenCalledWith( todo.id );
    });

    test('button debe de llamar el deleteTodo', () => {

        render(<TodoItem
            todo={todo}
            onToggleTodo={ onToggleTodoMock }
            onDeleteTodo={ onDeleteTodoMock }
        />
        );

        const btnDel = screen.getByTestId('btnDelete');
        fireEvent.click( btnDel );

        expect( onDeleteTodoMock ).toHaveBeenCalledWith( todo.id );
    });
});