import "../../styles/Accounts.css" 

const Assets = ({ amount, name }) => {
    return (
        <div className="assets">
            <h1>{amount}</h1>
            <p>{name}</p>
        </div>
    )
}

export default Assets;