import { useState } from "react";
import "../styles/Auth.css"
import Register from "../pages/RegisterPage/Register";
import Login from "../pages/LoginPage/Login";

const Auth = () => {
    const [currentPage, setCurrentPage] = useState('Register');

    const navigateTo = (page) => {
        setCurrentPage(page);
    }

    return (
        <div className="auth">
            {currentPage === 'Register' ? (
                <Register navigateTo={navigateTo}/>
            ) : (
                <Login navigateTo={navigateTo} />
            )}
        </div>
    )
}

export default Auth;