const {Car} = require('../models');

const carData = [
    {
        image: ['https://res.cloudinary.com/dfe0rjexj/image/upload/v1669079800/Image_not_Available_uocgt8.jpg'],
        brand: 'Dodge',
        model: 'Challenger',
        year: '2018',
        mileage: '30,000',
        price: '25,000',
    },
    {
        image: ['https://res.cloudinary.com/dfe0rjexj/image/upload/v1669079800/Image_not_Available_uocgt8.jpg'],
        brand: 'BMW',
        model: '330i',
        year: '2023',
        mileage: '50',
        price: '40,000',
    },
    {
        image: ['https://res.cloudinary.com/dfe0rjexj/image/upload/v1669079800/Image_not_Available_uocgt8.jpg'],
        brand: 'Mitsubishi',
        model: '3000gt VR-4',
        year: '1993',
        mileage: '63,000',
        price: '10,000',
    },
];

const seedCars = () => Category.bulkCreate(carData);

module.exports = seedCars;