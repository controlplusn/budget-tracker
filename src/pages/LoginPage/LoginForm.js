import TextInput from "../../components/ui/TextInput"
import Button from "../../components/ui/Button"

const LoginForm = () => {
    return (
        <form>
            <TextInput type={'email'} placeholder={'Email'} />
            <TextInput type={'password'} placeholder={'Password'} />
            <Button buttonTitle={'Login'} />
        </form>
    )
}

export default LoginForm;