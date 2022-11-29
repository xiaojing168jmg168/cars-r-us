//for login salers 
const router = require('express').Router();
const { User, Car } = require('../models');
const withAuth = require('../utils/auth')


// home dahsboard route
router.get('/dashboard', async (req, res) => {
    try {
        const carData = Car.findAll({
            include: {
                model: User,
                attributes: ["name", "email"]
            }
        ,
            where: {
                user_id: req.session.user_id
            }

        })
        const cars = (await carData).map((car) => car.get({ plain: true }))

        res.status(200).render('dashboard', { cars, logged_in: req.session.logged_in });
    }
    catch (err) {
        res.status(500).json(err)
    }
})
// update car page
router.get('/update-car/:id', async (req, res) => {

    res.render('update-car')
})


// add car page
router.get('/add-car', async (req, res) => {
    res.render('add-car')
})


module.exports = router;