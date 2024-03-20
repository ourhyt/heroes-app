import {AuthContext} from "./AuthContext.jsx";
import {useReducer} from "react";
import {authReducer} from "./AuthReducer.js";
import {types} from "../types/types.js";

const init = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    return {
        logged:!!user,
        user
    }
}
export const AuthProvider = ({children}) => {
    const [ authState, dispatch ] = useReducer(authReducer,{}, init)

    const login = (name = '') => {
        const user = {
            id:'ABC',
            name
        }
        const action = {
            type: types.login,
            payload: user,
        }

        localStorage.setItem('user', JSON.stringify(user));

        dispatch(action)
    }

    const logout = () => {
        const action = {
            type: types.logout,
        }

        localStorage.removeItem('user');

        dispatch(action)
    }

    return (
        <AuthContext.Provider value={{logout,login, ...authState}}>
            {children}
        </AuthContext.Provider>
    )
}
