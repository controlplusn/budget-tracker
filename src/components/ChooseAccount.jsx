import "../styles/Accounts.css"

const ChooseAccount = ({ accountName }) => {
    return (
        <li className="account-item">
            <a className="account-link" href="#">
                <span>{accountName}</span>
            </a>
        </li>
    )
}

export default ChooseAccount;  