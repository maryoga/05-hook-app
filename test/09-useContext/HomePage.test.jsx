import { render, screen } from '@testing-library/react';
import { HomePage } from '../../src/09-useContext/HomePage';
import { UserContext } from '../../src/09-useContext/context/UserContext';

describe('Test on <HomePage />', () => {

    const user = {
        id: 1,
        name: 'MaryoG'
    }
    
    test('Must show the component without the user', () => {
        render(
            <UserContext.Provider value={{ user: null }}>
                <HomePage />
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre'); // aria-label
        expect( preTag.innerHTML ).toBe( 'null' );
        //console.log( preTag.innerHTML );
        // screen.debug();
    });

    test('Must show the component with the user', () => {
        render(
            <UserContext.Provider value={{ user }}>
                <HomePage />
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre'); // aria-label
        expect( preTag.innerHTML ).toContain( user.name );
        expect( preTag.innerHTML ).toContain( `${user.id}` ); // template string, esto es igual que el toString()
        // expect( preTag.innerHTML ).toContain( user.id.toString() );
        //console.log( preTag.innerHTML );
        // screen.debug();
    });
});