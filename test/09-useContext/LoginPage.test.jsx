import { fireEvent, render, screen } from '@testing-library/react';
import { UserContext } from '../../src/09-useContext/context/UserContext';
import { LoginPage } from '../../src/09-useContext/LoginPage';


describe('Test on <LoginPage />', () => {

    const setUserMock = jest.fn();
    // en cada una de nuestras pruebas se van a resetear mis evaluaciones
    beforeEach(() => jest.clearAllMocks());

    test('Debe de mostrar el componente sin el usuario', () => {
        render(
            <UserContext.Provider value={ { user: null } }>
                <LoginPage />
            </UserContext.Provider>
        );
        const preTag = screen.getByLabelText('logUser'); // aria-label
        expect( preTag.innerHTML ).toBe('null');
    });

    test('debe de llamar al setUser cuando se hace clic en el botón', () => {
        render(
            <UserContext.Provider value={ { user: null, setUser: setUserMock } }>
                <LoginPage />
            </UserContext.Provider>
        );
        const btnUser = screen.getByTestId('botonUser'); // aria-label
        fireEvent.click( btnUser );
        
        expect( setUserMock ).toHaveBeenCalledWith( {"email": "john@google.com", "id": 123, "name": "John"} );
    });
});