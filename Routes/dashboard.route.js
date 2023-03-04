const { Router } = require('express');
const dashboardRouter = Router();

dashboardRouter.get('/dashboard', (req, res) => {
    res.send('I am Dashboard')
});

module.exports = { dashboardRouter };