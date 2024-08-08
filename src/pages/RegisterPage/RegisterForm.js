import TextInput from "../../components/ui/TextInput";
import Button from "../../components/ui/Button";
import "../../styles/RegisterForm.css"

const RegisterForm = (handleToggleForm) => {
    return (
        <div className="regFormContainer">
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
                    <a href="#" onClick={handleToggleForm}>Login</a>
                </p>
            </form>
        </div>
    )
}

export default RegisterForm;