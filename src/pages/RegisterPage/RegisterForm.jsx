import TextInput from "../../components/form/TextInput";
import Button from "../../components/form/Button";
import "../../styles/RegisterForm.css";

const RegisterForm = () => {
    return (
        <div className="reg-left-container">
            <form className="regForm">
                <h1>Create Account</h1>
                <TextInput type={'email'} placeholder={'Email'}/>
                <TextInput type={'password'} placeholder={'Create password'}/>
                <TextInput type={'password'} placeholder={'Confirm password'}/>
                <Button buttonTitle={'Create account'}/>

                <div className="hr-with-text">
                    <hr />
                    <span>or</span>
                    <hr />
                </div>

                <p>
                    Already have an account?{" "}
                    <a href="#">Login</a>
                </p>
            </form>
        </div>
    )
}

export default RegisterForm;