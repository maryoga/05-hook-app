import { act, renderHook } from '@testing-library/react';
import { useCounter } from '../../src/hooks/useCounter';


describe('Test on the useCounter', () => {

    test('It should return the default values', () => {
        const { result } = renderHook( () => useCounter());
        const { counter, increment, decrement, reset } = result.current;

        // estoy esperando que el valor sea 10 porque es el valor por defecto y no le estoy mandando ningun valor  en la llamada
        expect( counter ).toBe( 10 );
        // voy evauar el increment, decrement y reset,que espere que sea una función
        expect( increment ).toEqual( expect.any( Function ));
        expect( decrement ).toEqual( expect.any( Function ));
        expect( reset ).toEqual( expect.any( Function ));
    });

    test('It must generate the counter with the value of 100', () => {
        const { result } = renderHook( () => useCounter(100));        
        expect( result.current.counter ).toBe( 100 );
    });

    test('Counter must be incremented', () => {
        const { result } = renderHook( () => useCounter(100));
        const { counter, increment } = result.current;

        act( () => {
            increment();
            increment(2);
        });
        expect( result.current.counter ).toBe( 103 );
    });

    test('Counter must be decremented', () => {
        const { result } = renderHook( () => useCounter(100));
        const { counter, decrement } = result.current;

        act( () => {
            decrement();
            decrement(2);
        });
        expect( result.current.counter ).toBe( 97 );
    });

    test('Counter must be reset', () => {
        const { result } = renderHook( () => useCounter(100));
        const { counter, decrement, reset } = result.current;

        act( () => {
            decrement();
            reset();
        });
        expect( result.current.counter ).toBe( 100 );
    });
});