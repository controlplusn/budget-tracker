import TextInput from "../../components/form/TextInput"
import Button from "../../components/form/Button"
import "../../styles/LoginForm.css";

const LoginForm = ({ navigateTo }) => {
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
                    <a href="#" onClick={() => navigateTo('Register')}>
                        Create account
                    </a>
                </p>
            </form>
        </div>
    )
}

export default LoginForm;