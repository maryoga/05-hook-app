import { fireEvent, render, screen } from '@testing-library/react';
import { MultipleCustomHooks } from '../../src/03-examples';
import { useFetch } from '../../src/hooks/useFetch';
import { useCounter } from '../../src/hooks/useCounter';

//Hacer el mock del url
jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('Test on <MultipleCustomHooks />', () => {
    
    const mockIncrement = jest.fn();
    useCounter.mockReturnValue({ 
        counter: 1,
        increment: mockIncrement
    });
    
    //despues de cada prueba debemos devolver al estado inicial las funciones, limpiamos las pruebas
    beforeEach(() => {
        jest.clearAllMocks();
    });
    
    test('It must show the component by default', () => {
        
        useFetch.mockReturnValue({ 
            data: null, 
            isLoading: true, 
            hasError: null 
        });

        render( <MultipleCustomHooks />);
        // screen.debug();
        expect( screen.getByText('Loading...'));
        expect( screen.getByText('Rick and Morty Serie'));
        
        //Probar que el botón Next quote esté desabilitado
        const nextButton = screen.getByRole('button', { name: 'Next quote' });
        // console.log(nextButton.disabled);
        expect( nextButton.disabled).toBeTruthy();
    });

    test('Must show a Episode / Quote', () => {

        useFetch.mockReturnValue({ 
            data: {id: 77, name: 'Maryo'}, 
            isLoading: false, 
            hasError: null 
        });

        render( <MultipleCustomHooks />);
        //screen.debug();
        expect( screen.getByText('Maryo')).toBeTruthy();
        expect( screen.getByText(77)).toBeTruthy();

        const nextButton = screen.getByRole('button', { name: 'Next quote' });
        expect( nextButton.disabled).toBeFalsy(); // el disable es neg y espero que el botón no exista
    });

    test('Must call the increment function', () => {


        useFetch.mockReturnValue({ 
            data: {id: 77, name: 'Maryo'}, 
            isLoading: false, 
            hasError: null 
        });


        render( <MultipleCustomHooks />);
        const nextButton = screen.getByRole('button', { name: 'Next quote' });
        fireEvent.click(nextButton);
        
        expect( mockIncrement ).toHaveBeenCalled();
    });
});