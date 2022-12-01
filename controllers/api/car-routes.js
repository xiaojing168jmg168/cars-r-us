//get //all,get single car,post,update,delete,

const router = require('express').Router();
const { Car } = require('../../models');
const withAuth = require('../../utils/auth');
const cloudinary = require("cloudinary").v2
require("dotenv").config();
console.log(cloudinary.config({
    cloud_name: 'dfe0rjexj',
    api_key: '742987661832851',
    api_secret: 'zIzYR1-8had9vwTDlmnWo4DyHlo'
}));



// Route to create a new listing
router.post("/newCar", async (req, res) => {
    try {
        let { image, brand, model, year, mileage, price } = req.body;
        const newCarData = Car.create({
            image: image,
            brand: brand,
            model: model,
            year: year,
            mileage: mileage,
            price: price,
            user_id: req.session.user_id
        });
        res.status(200).json(newCarData);
    }
    catch (err) {
        res.status(500).json(err);
    }
})

// Route to delete a car listing
router.delete('/:id', async (req, res) => {
    try {
        const carData = await Car.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });

        if (!projectData) {
            res.status(404).json({ message: 'No Car Listing found with this id!' });
            return;
        }

        res.status(200).json(carData);
    } catch (err) {
        res.status(500).json(err);
    }
})

// Route to update a car listing
router.put('/:id', async (req, res) => {
    try {

        const carData = await Car.update(
            {
                brand: req.body.brand,
                image: req.body.image,
                model: req.body.model,
                year: req.body.year,
                mileage: req.body.mileage,
                price: req.body.price
            }, {
            where: {
                id: req.params.id,
                user_id: req.session.user_id
            }
        })
        res.status(200).json(carData)
    }
    catch (err) {
        res.status(500).json(err);
    }
})

// Search api Route
router.get('/search/:brand', async (req, res) => {
    try {
        const carData = await Car.findAll({
            where: {
                brand: req.params.brand,
            },
            include: {
                model: User,
                attributes: ['name', 'email']
            }
        })
        const cars = carData.map((car) => car.get({ plain: 'true' }))
        res.status(200).json(cars)
    }
    catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router;