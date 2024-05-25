import { createContext } from "react";

const UserContext = createContext({
    LoggedInuser : 'Default User',
});

export default UserContext;