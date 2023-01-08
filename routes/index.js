const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.send('Chase Bush');
});
routes.get('/s', (req, res) => {
    res.send('Sophia Bush');
});
module.exports = routes;