import { act, renderHook } from '@testing-library/react';
import { useForm } from '../../src/hooks/useForm';


describe('Test in the useForm', () => {

    const initialForm = {
        name: 'Fer',
        email: 'fer@example.com'
    }

    test('It must return the default values', () => {
        // desestructurar algo que viene del renderHook
        const { result } = renderHook( () => useForm(initialForm));
        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any(Function),
            onResetForm: expect.any(Function)
          });        
    });

    test('The name of the form must be changed', () => {
        const newValue = 'Fer';
        // crear sujeto de prueba
        const { result } = renderHook( () => useForm(initialForm));
        // montar el Hook, mandar a llamar el onInputChange()
        const { onInputChange } = result.current;

        // usar el act (es una func que recibe un callback como argumento) porque se va a cambiar el state, event
        act(() => {
            //evento que debe tener la config necesaria, simular el evento que estoy enviando con props que esta esperando
            onInputChange( { target: { name: 'name', value: newValue } })    
        })

        //expect, result.current.name === Fer
        //expect, result.current.formState.name === Fer
        expect( result.current.name ).toBe( newValue );
        expect( result.current.formState.name ).toBe( newValue );
    });

    test('The form must be reset', () => {
        const newValue = 'John';
        const { result } = renderHook( () => useForm(initialForm));
        const { onInputChange, onResetForm } = result.current;

        act(() => {
            //1ero siulamos el cambio y luego reseteamos el form y la prueba pasará
            onInputChange( { target: { name: 'name', value: newValue } })    
            onResetForm();
        })

        expect( result.current.name ).toBe( initialForm.name );
        expect( result.current.formState.name ).toBe( initialForm.name );
    });
});