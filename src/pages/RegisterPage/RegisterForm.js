import TextInput from "../../components/ui/TextInput";
import Button from "../../components/ui/Button";

const RegisterForm = () => {
    return (
        <form>
            <TextInput type={'email'} placeholder={'Email'}/>
            <TextInput type={'password'} placeholder={'Create password'}/>
            <TextInput type={'password'} placeholder={'Confirm password'}/>
            <Button buttonTitle={'Create account'}/>
        </form>
    )
}

export default RegisterForm;