import React from "react";
import { AuthContext } from "../providers/auth.provider";
//permite acceder al contexto desde cualquier lado
const useAuth = () => React.useContext(AuthContext);

export { useAuth };