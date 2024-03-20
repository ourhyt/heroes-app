import {authReducer} from "../../../src/auth/index.js";

describe('Test AuthReducer', () => {

    const initialState = {logged: false};

    it('Should return default state', () => {
        const state = authReducer(initialState, {type:'test'});
        expect(state).toEqual(initialState);
    });

    it('Should return logged in true', () => {
        const state = authReducer(initialState, {type:'[Auth] Login'});
        expect(state.logged).toEqual(true);
    });

    it('Should return state', () => {
        const state = authReducer(initialState, {type:'[Auth] Logout'});
        expect(state.logged).toEqual(false);
    });
});