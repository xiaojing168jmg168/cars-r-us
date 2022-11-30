const router = require('express').Router();
const { User, Car } = require('../models');


// Landing page/about-us route
router.get('/', async (req, res) => {
    res.render('about-us', { logged_in: req.session.logged_in})
})

// buy Route
router.get("/buy", async (req, res) => {
    try {

        const carData = await Car.findAll({

            include: {
                model: User,
                attributes: ['name', 'email']
            }
        })


        const cars = carData.map((car) => car.get({ plain: true }));

        console.log(cars);

        res.render("homepage", {
            cars,
            logged_in: req.session.logged_in
        })
    }
    catch (err) {
        res.status(500).send(err)
    }
})

// signup page
router.get('/signup', async (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }

    res.render('signup');
})

// result route
router.get('/result', async (req, res) => {
    res.render('result', {logged_in: req.session.logged_in} )
})

// contact-us route
router.get('/contact-us', async (req, res) => {
    res.render('contact-us', { logged_in: req.session.logged_in })
})

//privacy-policy
router.get('/privacy-policy', async (req, res) => {
    res.render('privacy-policy', { logged_in: req.session.logged_in })
})

// Login Route
router.get('/login', async (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

module.exports = router;
