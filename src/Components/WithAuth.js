// Our HOC
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

function WithAuth(Component){
    return function(props){
        const [loggedInUser, setLoggedInUser] = useContext(AuthContext)
        return (
            <Component loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} {...props}>

            </Component>
        )
    }
}