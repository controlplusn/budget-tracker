import RegisterForm from "./RegisterForm";
import RegisterRight from "./RegisterRight";
import "../../styles/RegisterForm.css";

const Register = ({ navigateTo }) => {
    return (
        <div className="register-container">
            <RegisterForm navigateTo={navigateTo} />
            <RegisterRight />
        </div>
    )
}

export default Register