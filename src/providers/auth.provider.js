import React from "react";
import { login, getUser } from "./../services/auth.services";

let AuthContext = React.createContext(null);

const AuthProvider = ({ children }) => {
    let [user, setUser] = React.useState();

    React.useEffect(() => {
        if (localStorage.token) {
            get();
        }
    }, []);

    let signin = async (form, callback) => {
        const { data } = await login(form);
        if (data?.status) {
            localStorage.token = data.token;
            const user = await getUser();
            setUser(user.item);
            callback();
        } else {
            alert("Datos incorrectos");
            callback();
        }
    };

    let signout = (callback) => {
        localStorage.removeItem('token');
        callback();
    };

    let get = async () => {
        const { data } = await getUser();
        setUser(data.item);
    };

    let value = { user, signin, signout, get };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthProvider, AuthContext };