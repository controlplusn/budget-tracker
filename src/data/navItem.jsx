// icons
import { BiSolidDashboard } from "react-icons/bi";
import { BiSolidUserDetail } from "react-icons/bi";
import { BiCreditCard } from "react-icons/bi";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { FaMoneyBills } from "react-icons/fa6";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { BiMoneyWithdraw } from "react-icons/bi";
import { BiGridAlt } from "react-icons/bi";
import { BiListPlus } from "react-icons/bi";
import { BiData } from "react-icons/bi";
import { BiBarChartSquare } from "react-icons/bi";
import { FaChartPie } from "react-icons/fa6";
import { FaChartLine } from "react-icons/fa6";
import { BiBookmarkPlus } from "react-icons/bi";
import { FaCircleUser } from "react-icons/fa6";
import { FaFileExport } from "react-icons/fa6";
import { BiCog } from "react-icons/bi";


const navList = [
    {
        _id: 1,
        name: 'Dashboard',
        icon: <BiSolidDashboard />,
    },
    {
        _id: 2,
        name: 'Accounts',
        icon: <BiSolidUserDetail />,
        children: [
            {_id: 2.1, icon: <BiCreditCard />, name: 'Manage Accounts'},
        ],
    },
    {
        _id: 3,
        name: 'Income & Expenses',
        icon: <FaMoneyBills />,
        children: [
            {_id: 3.1, icon: <FaMoneyBillTrendUp />, name: 'Income Tracker'},
            {_id: 3.2, icon: <BiMoneyWithdraw />, name: 'Expense Tracker'},
            {_id: 3.3, icon: <FaMoneyBillTransfer />, name: 'Transfer Funds'},
        ],
    },
    {
        _id: 4,
        name: 'Budget Management',
        icon: <BiGridAlt />,
        children: [
            {_id: 4.1, icon: <BiListPlus />, name: 'Set Budget'},
            {_id: 4.2, icon: <BiData />, name: 'Budget Overview'},
        ],
    },
    {
        _id: 5,
        name: 'Reports & Analytics',
        icon: <BiBarChartSquare />,
        children: [
            {_id: 5.1, icon: <FaChartPie />, name: 'Spending Analytics'},
            {_id: 5.2, icon: <FaChartLine />, name: 'Income vs Expenses'},
            {_id: 5.3, icon: <BiBookmarkPlus />, name: 'Savings Tracker'},
        ],
    },
    {
        _id: 6,
        name: 'Stock Market & Trading',
        children: [
            {_id: 6.1, name: 'Market Overview'},
            {_id: 6.2, name: 'Portfolio Tracker'},
            {_id: 6.3, name: 'Trading Logs'},
        ],
    },
    {
        _id: 7,
        name: 'Settings',
        icon: <BiCog />,
        children: [
            {_id: 7.1, icon: <FaCircleUser />, name: 'Profile Settings'},
            {_id: 7.2, icon: <FaFileExport />, name: 'Data Backup & Export'},
        ],
    },
];

export default navList;