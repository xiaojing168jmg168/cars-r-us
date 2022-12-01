const {Car} = require('../models');

const carData = [
    {
        image: 'https://res.cloudinary.com/dfe0rjexj/image/upload/v1669079800/Image_not_Available_uocgt8.jpg',
        brand: 'Dodge',
        model: 'Challenger',
        year: 2018,
        mileage: 30000.00,
        price: 25000.00,
        user_id: 1
    },
    {
        image: 'https://res.cloudinary.com/dfe0rjexj/image/upload/v1669079800/Image_not_Available_uocgt8.jpg',
        brand: 'BMW',
        model: '330i',
        year: 2023,
        mileage: 50.00,
        price: 40000.00,
        user_id: 2
    },
    {
        image: 'https://res.cloudinary.com/dfe0rjexj/image/upload/v1669079800/Image_not_Available_uocgt8.jpg',
        brand: 'Mitsubishi',
        model: '3000gt VR-4',
        year: 1993,
        mileage: 63000.00,
        price: 10000.00,
        user_id: 3
    },
];

const seedCars = () => Car.bulkCreate(carData);

module.exports = seedCars;