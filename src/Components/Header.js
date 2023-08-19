//My Header

import WithAuth from './WithAuth';

function Header({ loggedInUser, setLoggedInUser }) {
    function handleLogin() {
        const username = window.prompt("Enter Login Name:", "");
        setLoggedInUser(username);
    }

    function handleLogout() {
        setLoggedInUser(""); // Clear the loggedInUser when logging out.
    }

    return (
        <div>
            <h1>Silicon Valley Code camp</h1>
            {loggedInUser && loggedInUser.length > 0 ? (
                <div>
                    <span>logged in as {loggedInUser}</span>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <button onClick={handleLogin}>Login</button>
            )}
        </div>
    );
}

export default WithAuth(Header);
