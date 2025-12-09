import { useState } from "react";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({children}) => { //wrapper = children

    const [user, setUser] = useState(() => {
        
        const sessionData = sessionStorage.getItem("session");

        if(sessionData) {
            return JSON.parse(sessionData);
        } else {
            return null;
        }

    });

    const login = (name,password) => {
        if (name === "admin" && password === "1234") {
            const session = { name }; 
            setUser(session);
            sessionStorage.setItem("session", JSON.stringify(session));
            return true;
        }
        return false;
    };

    const logOut = () => {
        sessionStorage.removeItem("session");
        setUser(null);
        alert("Sesion finalizada");
    };

    return <AuthContext.Provider value={{ user, login, logOut }}>
        {children}
    </AuthContext.Provider>
};