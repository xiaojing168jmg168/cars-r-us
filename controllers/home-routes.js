const router = require('express').Router();
const { User } = require('../models');


// Homepage Route
router.get("/", async (req, res) => {
    try{
        const userData = User.findAll({
            attributes: { exclude: ['password'] },
            order: [['name', 'ASC']],
        })
        
        const users = userData.map((user) => user.get({ plain: true }));

        res.render("homepage", {
            users,
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
router.get('/update-car', async (req, res) => {
    res.render('update-car')
})

// Dashboard page
router.get('/dashboard', async (req, res) => {
    res.render('dashboard')
})

// add car page
router.get('/add-car', async (req, res) => {
    res.render('add-car')
})

// result route
router.get('/result', (req,res) => {
    res.render('result')
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
  