import TextInput from "../../components/ui/TextInput"
import Button from "../../components/ui/Button"
import "../../styles/LoginForm.css";

const LoginForm = ({ handleToggleForm }) => {
    return (
        <div className="login-left-container">
            <form className="loginForm">
                <h1>Login</h1>
                <TextInput type={'email'} placeholder={'Email'} />
                <TextInput type={'password'} placeholder={'Password'} />
                <Button buttonTitle={'Login'} />

                <div className="hr-with-text">
                    <hr />
                    <span>or</span>
                    <hr />
                </div>

                <p>
                    Don't have an account?{" "}
                    <a href="#" onClick={handleToggleForm}>Create account</a>
                </p>
            </form>
        </div>
    )
}

export default LoginForm;