const router = require('express').Router();

const userRoutes = require('./user-routes');
const carRoutes = require('./car-routes');
router.use('/users', userRoutes);
router.use('/cars', userRoutes);
module.exports = router;
