const router = require('express').Router();
const { User, Car } = require('../models');


// Homepage Route
router.get("/", async (req, res) => {
    try {
        const carData = Car.findAll({
            include: {
                model: User,
                attributes: ['name', 'email']
            },
            limit: 10
        })

        const cars = carData.map((user) => user.get({ plain: true }));

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
        res.redirect('/dashboard');
        return
      }
      res.render('signup')
})


// result route
router.get('/result', (req, res) => {
    res.render('result')
})


// about-us route
router.get('/about-us', (req, res) => {
    res.render('about-us')
})

// contact-us route
router.get('/contact-us', (req, res) => {
    res.render('contact-us')
})

//privacy-policy
router.get('/privacy-policy', (req, res) => {
    res.render('privacy-policy')
})
// Login Route
router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

module.exports = router;
