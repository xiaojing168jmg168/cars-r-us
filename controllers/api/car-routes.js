//get //all,get single car,post,update,delete,

const router = require('express').Router();
const { Car } = require('../../models');
const withAuth = require('../../utils/auth');
const cloudinary = require("cloudinary").v2
require("dotenv").config();
console.log(cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
}));



// Route to create a new listing
router.post("/newCar", async (req, res) => {
    try {
        let { image, brand, model, year, mileage, price } = req.body;
        let img
        // What to do if there are more than 1 images
        if (image) {
            cloudinary.uploader
                .upload(image, {
                    resource_type: "image",
                })
                .then((result) => {
                    img = result.url;
                })
                .catch((err) => {
                    console.log(err);
                })
        }
        // What to do if no images are found
        else {
            img = "https://res.cloudinary.com/dfe0rjexj/image/upload/v1669079800/Image_not_Available_uocgt8.jpg";
        }
        const newCarData = Car.create({
            image: img,
            brand,
            model,
            year,
            mileage,
            price
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
                title: req.body.title,
                content: req.body.content
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

module.exports = router;