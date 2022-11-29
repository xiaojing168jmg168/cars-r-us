const router = require('express').Router();
const { User, Car } = require('../models');


// Homepage Route
router.get("/", async (req, res) => {
    try {

        const carData = await Car.findAll({

            include: {
                model: User,
                attributes: ['name', 'email']
            }
        })


        const cars = carData.map((car) => car.get({ plain: true }));


        res.render("homepage", {
            cars,
            logged_in: req.session.logged_in
        })
    }
    catch (err){
        res.status(500).send(err)
    }
})

// signup page
router.get('/signup', async (req, res) => {
    res.render('singup')
})

// update car page
router.get('/update-car/:id', async (req, res) => {
    res.render('update-car')
})

// Dashboard page
router.get('/dashboard', async (req, res) => {
    res.render('dashboard')
})


// result route

router.get('/result', async (req, res) => {
    try{
        const carData = await Car.findAll({

            include: {
                model: User,
                attributes: ['name', 'email']
            },
            where: {
                brand: req.body.brand,
                model: req.body.model,
                year: req.body.year,
                mileage: req.body.mileage,
            }
        })

        // Serialize Car Data
        const cars = carData.map((car) => car.get({plain: true}))

        // Render results page while sending logged_in and card to the view
        res.render('result', {cars, logged_in: req.session.logged_in})
    }
    catch (err) {
        res.status(500).json(err);
    }
})


// about-us route

router.get('/about-us', async (req, res) => {

    res.render('about-us')
})

// contact-us route

router.get('/contact-us', async (req, res) => {

    res.render('contact-us')
})

//privacy-policy

router.get('/privacy-policy', async (req, res) => {

    res.render('privacy-policy')
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
  