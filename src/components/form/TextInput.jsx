import "../../styles/RegisterForm.css"

const TextInput = ({ type, placeholder }) => {
    return (
        <input type={type} placeholder={placeholder}></input>
    )
}

export default TextInput;