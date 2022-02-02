import { createContext, useState } from "react";

const UserContext = createContext();


function UserProvider({ children }) {
    
    const [user, setUser] = useState(null);
    console.log("UseUSEuser: ", user);
    const value = [user, setUser]

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>)

}

export {UserContext, UserProvider}