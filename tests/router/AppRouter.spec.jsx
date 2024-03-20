import {render, screen} from "@testing-library/react";
import {AuthContext} from "../../src/auth/index.js";
import {MemoryRouter} from "react-router-dom";
import {AppRouter} from "../../src/router/AppRouter.jsx";

describe('Test AppRouter', () => {

    it('should login if not authenticated', () => {
        const contextValue = {
            logged: false,
        }
        render(
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={contextValue}>
                    <AppRouter/>
                </AuthContext.Provider>
            </MemoryRouter>

        );
        expect(screen.getAllByText('Login').length).toBe(2);
    });

    it('should login if authenticated', () => {
        const contextValue = {
            logged: true,
            user: {
                name:'Strider',
                id: 'ABC123'
            }
        }
        render(
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={contextValue}>
                    <AppRouter/>
                </AuthContext.Provider>
            </MemoryRouter>
        );
        expect(screen.getByText('Marvel Comics')).toBeTruthy();
    });
});