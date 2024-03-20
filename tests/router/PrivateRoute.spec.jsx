import {render, screen} from "@testing-library/react";
import {AuthContext} from "../../src/auth/index.js";
import {MemoryRouter} from "react-router-dom";
import {PrivateRoute} from "../../src/router/PrivateRoute.jsx";

describe('Test private route', () => {
    it('should ', () => {
        Storage.prototype.setItem = jest.fn();
        const contextValue = {
            logged: true,
            user: {
                name:'Strider',
                id: 'ABC123'
            }
        }
        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/search']}>
                    <PrivateRoute>
                        <h1>Private</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        )
        expect(screen.getByText('Private')).toBeTruthy();
        expect(localStorage.setItem).toHaveBeenCalledWith('lastPath','/search');
    });
});