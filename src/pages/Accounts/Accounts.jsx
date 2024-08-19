import { useState } from "react";
import ChooseAccount from "../../components/ChooseAccount";
import "../../styles/Accounts.css"
import Assets from "./Assets";
import accList from "../../data/accItem";
import AddAccountGroupButton from "../../components/AddAccountGroupButton";
import CashAccount from "./CashAccount";

const Accounts = () => {
    const [activeAccount, setActiveAccount] = useState(null);

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
                            isActive={activeAccount === account.accName}
                            onClick={() => setActiveAccount(account.accName)}
                        />
                    ))}

                    <AddAccountGroupButton />
                </div>

                <div className="account-details">
                    {activeAccount === "Cash" && <CashAccount />}
                </div>
            </div>

            <div className="transactions">
                <header>
                    <p>Last Transactions</p>
                    <p>Transaction Overview: </p>
                </header>
            </div>
        </div>
    )
}

export default Accounts;