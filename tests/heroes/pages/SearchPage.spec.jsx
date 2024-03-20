import {render,screen} from "@testing-library/react";
import {MemoryRouter} from "react-router-dom";
import {SearchPage} from "../../../src/heroes/index.js";

describe('Test heroes search', () => {
    it('should show correctly with default values', () => {
        render(
            <MemoryRouter>
                <SearchPage/>
            </MemoryRouter>
        )

    });

    it('should show batman and input with queryPAram value', () => {
        render(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <SearchPage/>
            </MemoryRouter>
        )
        const input = screen.getByRole('textbox');
        expect(input.value).toBe('batman');

        const img = screen.getByRole('img');
        expect(img.src).toContain('/assets/heroes/dc-batman.jpg');
    });
});