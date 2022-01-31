import React from "react";

const UserContext = React.createContext();

function UserProvider({ children }) {
    const currentUser = {
        username: "David"
    }

    return <UserContext.Provider value={currentUser}>{children}</UserContext.Provider>
}

export {UserContext, UserProvider}