//This is my App.js
import Speakers from "./pages/Speakers"
import { AuthProvider } from "./Context/AuthContext"
import Header from "./Components/Header"

const App = () =>{
    return(
        <AuthProvider initialLoggedInUser="Anita">
            <div>
                <Header/>
                <Speakers/>
            </div>
        </AuthProvider>

    )
}

export default App