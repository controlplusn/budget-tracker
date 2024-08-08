import TextInput from "../../components/ui/TextInput"
import Button from "../../components/ui/Button"

const LoginForm = ({ handleToggleForm }) => {
    return (
        <form>
            <TextInput type={'email'} placeholder={'Email'} />
            <TextInput type={'password'} placeholder={'Password'} />
            <Button buttonTitle={'Login'} />
            <p>
                Don't have an account?{" "}
                <a href="#" onClick={handleToggleForm}>Create account</a>
            </p>
        </form>
    )
}

export default LoginForm;