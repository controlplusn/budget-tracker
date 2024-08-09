import RegisterForm from "./RegisterForm";
import RegisterRight from "./RegisterRight";
import "../../styles/RegisterForm.css";

const Register = () => {
    return (
        <div className="register-container">
            <RegisterForm />
            <RegisterRight />
        </div>
    )
}

export default Register