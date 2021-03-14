import {
    useState,
    createContext
} from "react";
const UserContext = createContext({
    isLoggedIn: false
});
export default UserContext;
