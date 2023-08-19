// Our HOC
import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

function WithAuth(Component) {
    return function WithAuthWrapper(props) {
        const { loggedInUser, setLoggedInUser } = useContext(AuthContext);

        return (
            <Component loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} {...props} />
        );
    };
}

export default WithAuth;
