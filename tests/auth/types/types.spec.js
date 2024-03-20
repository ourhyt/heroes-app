import {types} from "../../../src/auth/types/types.js";

describe('Test types', () => {
    it('should return types', () => {
        expect(types).toEqual({
            login: '[Auth] Login',
            logout: '[Auth] Logout',
        });
    });
});