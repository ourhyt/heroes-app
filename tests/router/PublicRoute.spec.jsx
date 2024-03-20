import {render, screen} from "@testing-library/react";
import {AuthContext} from "../../src/auth/index.js";
import {PublicRoute} from "../../src/router/PublicRoute.jsx";
import {MemoryRouter, Route, Routes} from "react-router-dom";

describe('Test Public Route', () => {
    it('if you dont authenticate should show children', () => {
        const contextValue = {
            logged: false,
        }
        render(
            <AuthContext.Provider value={contextValue}>
                <PublicRoute>
                    <h1>Public</h1>
                </PublicRoute>
            </AuthContext.Provider>
        )
        expect(screen.getByText('Public')).toBeTruthy();
    });

    it('if you authenticate should navigate to marvel', () => {
        const contextValue = {
            logged: true,
            user: {
                name:'Strider',
                id: 'ABC123'
            }
        }
        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/login']}>
                    <Routes>
                        <Route path="login" element={
                            <PublicRoute>
                                <h1>Public</h1>
                            </PublicRoute>
                        }/>
                        <Route path="marvel" element={ <h1>Pagina Marvel</h1>}/>
                    </Routes>
                </MemoryRouter>
            </AuthContext.Provider>
        )
        expect(screen.getByText('Pagina Marvel')).toBeTruthy();
    });
});