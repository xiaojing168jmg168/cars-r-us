//for login salers 
const router = require('express').Router();
const { User, Car } = require('../models');
const withAuth = require('../utils/auth')


// home dahsboard route
router.get('/', async (req, res) => {
    try {
        const carData = await Car.findAll({
            include: {
                model: User,
                attributes: ["name", "email"]
            }
            ,
            where: {
                user_id: req.session.user_id
            }
        })

        // Serialize car data 
        const cars = carData.map((car) => car.get({ plain: true }))

        // render dashboard while sending car results and logged_in
        res.status(200).render('dashboard', { cars, logged_in: req.session.logged_in });
    }
    catch (err) {
        res.status(500).json(err)
    }
})

// update car listing
router.get('/update-car/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const carData = await Car.findByPk(id, {
            where: {
                user_id: req.session.user_id
            }
        })

        const car = carData.get({ plain: true });

        res.status(200).render('update-car', { car, logged_in: req.session.logged_in })
    }
    catch (err) {
        res.status(500).json(err);
    }
})


// add car page
router.get('/add-car', async (req, res) => {
    if (req.session.logged_in){
        res.render('add-car', {logged_in: req.session.logged_in})
    } else {
        res.redirect('/login')
    }
})


module.exports = router;