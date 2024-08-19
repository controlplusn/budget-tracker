import "../../styles/LoginForm.css";
import LoginForm from "./LoginForm";
import LoginRight from "./LoginRight";

const Login = ({ navigateTo }) => {
    return (
        <div className="login-container">
            <LoginForm navigateTo={navigateTo} />
            <LoginRight />
        </div>
    )
}

export default Login;