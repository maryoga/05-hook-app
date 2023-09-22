import { render, screen } from '@testing-library/react';
import { MainApp } from '../../src/09-useContext/MainApp';
import { MemoryRouter } from 'react-router-dom';

describe('Test on <MainApp />', () => {

    // ruta por default
    test('Must show the HomePage ', () => {
        render(
            <MemoryRouter>
                <MainApp />
            </MemoryRouter>            
        );
        //screen.debug();
        expect( screen.getByText('HomePage') ).toBeTruthy();
    });

    // otra ruta
    test('Must show the LoginPage ', () => {
        render(
            <MemoryRouter initialEntries={['/login']}>
                <MainApp />
            </MemoryRouter>      
        );        
        expect( screen.getByText('LoginPage') ).toBeTruthy();
        // screen.debug();
    });
});