import "../styles/Accounts.css"

const ChooseAccount = ({ accountName, isActive, onClick }) => {
    return (
        <li className={`account-item ${isActive ? 'active' : ''}`} onClick={onClick}>
            <a className="account-link" href="#">
                <span>{accountName}</span>
            </a>
        </li>
    )
}

export default ChooseAccount;  