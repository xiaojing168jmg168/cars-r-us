const {Car} = require('../models');

const carData = [
    {
        image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
        brand: 'Dodge',
        model: 'Challenger',
        year: 2018,
        mileage: 30000.00,
        price: 25000.00,
        user_id: 1
    },
    {
        image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
        brand: 'BMW',
        model: '330i',
        year: 2023,
        mileage: 50.00,
        price: 40000.00,
        user_id: 2
    },
    {
        image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
        brand: 'Mitsubishi',
        model: '3000gt VR-4',
        year: 1993,
        mileage: 63000.00,
        price: 10000.00,
        user_id: 3
    },
];

const seedCars = () => Car.bulkCreate(carData, {
    individualHooks: true,
    returning: true,
});

module.exports = seedCars;