import "../../styles/LoginForm.css";
import LoginForm from "./LoginForm";
import LoginRight from "./LoginRight";

const Login = () => {
    return (
        <div className="login-container">
            <LoginForm />
            <LoginRight />
        </div>
    )
}

export default Login;