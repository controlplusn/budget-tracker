const navList = [
    {
        _id: 1,
        name: 'Dashboard',
        icon: 'bi/BiSolidDashboard',
    },
    {
        _id: 2,
        name: 'Accounts',
        children: [
            {_id: 2.1, name: 'Manage Accounts'},
            {_id: 2.2, name: 'Accounts Overview'},
        ],
    },
    {
        _id: 3,
        name: 'Income & Expenses',
        children: [
            {_id: 3.1, name: 'Income Tracker'},
            {_id: 3.2, name: 'Expense Tracker'},
            {_id: 3.3, name: 'Transfer Funds'},
        ],
    },
    {
        _id: 4,
        name: 'Budget Management',
        children: [
            {_id: 4.1, name: 'Set Budget'},
            {_id: 4.2, name: 'Budget Overview'},
        ],
    },
    {
        _id: 5,
        name: 'Reports & Analytics',
        children: [
            {_id: 5.1, name: 'Spending Analytics'},
            {_id: 5.2, name: 'Income vs Expenses'},
            {_id: 5.3, name: 'Savings Tracker'},
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
        children: [
            {_id: 7.1, name: 'Profile Settings'},
            {_id: 7.2, name: 'Data Backup & Export'},
        ],
    },
];

export default navList;