import {fireEvent, render, screen} from "@testing-library/react";
import {AuthContext} from "../../../src/auth/index.js";
import {Navbar} from "../../../src/ui/index.js";
import {MemoryRouter} from "react-router-dom";

const mockUseNavigate = jest.fn();
jest.mock('react-router-dom',()=>({
    ...jest.requireActual('react-router-dom'),
    useNavigate:()=> mockUseNavigate
}))

describe('Tests Navbar', () => {

    const contextValue = {
        logout: jest.fn(),
        user: {
            name:'Strider',
        },
        logged: true
    }

    beforeEach(() => {
        jest.clearAllMocks()
    });

    it('should show user name', () => {
        render(
            <MemoryRouter>
                <AuthContext.Provider value={contextValue}>
                    <Navbar/>
                </AuthContext.Provider>
            </MemoryRouter>
        )
        expect(screen.getByText('Strider')).toBeTruthy()
    });

    it('should show logout and navigate when click on the button', () => {
        render(
            <MemoryRouter>
                <AuthContext.Provider value={contextValue}>
                    <Navbar/>
                </AuthContext.Provider>
            </MemoryRouter>
        )
        const button = screen.getByRole('button')
        fireEvent.click(button)
        expect(contextValue.logout).toHaveBeenCalled();
        expect(mockUseNavigate).toHaveBeenCalledWith("/login", {"replace": true});
    });
});