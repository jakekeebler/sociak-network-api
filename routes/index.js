const router = require('express').Router();

// import all of the API routes 
const apiRoutes = require('./api');

// add prefix of `/api` to all of the api routes
router.use('/api', apiRoutes);

// 404 message
router.use((req, res) => {
    res.status(404).send('<h1>404 Page Not Found</h1>');
  });

module.exports = router;