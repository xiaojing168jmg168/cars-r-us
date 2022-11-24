const {User} = require('../models');

const userData = [
    {
        name: 'Bob',
        email: 'Bob@gmail.com',
        password: 'Bob12321',

    },
    {
        name: 'Tom',
        email: 'Tom@gmail.com',
        password: 'Tom12321',

    },
    {
        name: 'John',
        email: 'John@gmail.com',
        password: 'John12321',

    },
];

const seedUsers = () => Category.bulkCreate(userData);

module.exports = seedUsers;