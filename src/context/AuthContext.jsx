import { createContext, useEffect, useReducer } from "react";
import { Axios } from "../utils/api";
const INITIAL_STATE = {
    user: JSON.parse(localStorage.getItem("user")) || null,
    loading: false,
    error: null,
};

export const AuthContext = createContext(INITIAL_STATE);

const AuthReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN_START":
            return {
                user: null,
                loading: true,
                error: null,
            };
        case "LOGIN_SUCCESS":
            return {
                user: action.payload,
                loading: false,
                error: null,
            };
        case "LOGIN_FAILURE":
            localStorage.removeItem("user");
            localStorage.removeItem("token");

            return {
                user: null,
                loading: false,
                error: action.payload,
            };
        case "LOGOUT":
            localStorage.removeItem("user");
            localStorage.removeItem("token");
            return {
                user: null,
                loading: false,
                error: null,
            };
        case "UPDATE_USER":
            localStorage.setItem("user", JSON.stringify(action.payload));
            return {
                ...state,
                user: {
                    ...state.user,
                    ...action.payload
                },
            };
        default:
            return state;
    }
};

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
    const updateUser = async () => {
        try {
            const res = await Axios.get("/users/" + state.user.id);
            const { purchaseList, ...user } = res.data;
            let coursesPaid = []
            purchaseList.forEach(purchase => {
                coursesPaid.push(purchase.courseId)
            })
            console.log(coursesPaid, user)
            dispatch({ type: "UPDATE_USER", payload: { ...user, coursesPaid } });
        } catch (err) {
            console.log(err)
        }
    };
    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(state.user));
    }, [state.user]);

    return (
        <AuthContext.Provider
            value={{
                user: state.user,
                loading: state.loading,
                error: state.error,
                dispatch,
                updateUser
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
