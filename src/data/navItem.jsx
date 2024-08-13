const navList = [
    {
        _id: 1,
        name: 'Dashboard',
    },
    {
        _id: 2,
        name: 'Accounts',
        children: [
            {_id: 2.1, name: 'Manage Accounts'},
            {_id: 2.2, name: 'Accounts overview'},
        ]
    },
    {
        _id: 3,
        name: 'Income & Expenses',
    },
    {
        _id: 4,
        name: 'Budget Management',
    },
    {
        _id: 5,
        name: 'Reports & Analytics',
    },
    {
        _id: 6,
        name: 'Stock Market & Trading',
    },
    {
        _id: 7,
        name: 'Settings',
    },
];

export default navList;