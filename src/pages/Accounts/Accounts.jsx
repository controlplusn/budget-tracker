import ChooseAccount from "../../components/ChooseAccount";
import "../../styles/Accounts.css"
import Assets from "./Assets";
import accList from "../../data/accItem";
import AddAccountButton from "../../components/AddAccountButton";

const Accounts = () => {
    return (
        <div className="accounts">
            <div className="accounts-header">
                <div className="asset-balance">
                    <p>Total Assets Balance</p>
                    <h1>100 000</h1>
                </div>

                <div className="asset-overview">
                    <Assets amount={"100 000"} name={"Income"}/>
                    <Assets amount={"100 000"} name={"Expenses"}/>
                    <Assets amount={"100 000"} name={"Total Savings"}/>
                </div>
            </div>

            <div className="account-section">
                <div className="choose-account">
                    {accList.map(account => (
                        <ChooseAccount 
                            key={account._id}
                            accountName={account.accName}
                        />
                    ))}

                    <AddAccountButton />
                </div>
            </div>
        </div>
    )
}

export default Accounts;