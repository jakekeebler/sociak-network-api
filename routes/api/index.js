const router = require('express').Router();

// set routes (user and thought routes)
const usersRoutes = require('./user-routes');
const thoughtsRoutes = require('./thought-routes');

// add `/users` to created routes 
router.use('/users', usersRoutes);

// add `/thoughts` to created routes 
router.use('/thoughts', thoughtsRoutes);

module.exports = router;