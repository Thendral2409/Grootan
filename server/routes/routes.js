const express = require('express');
const route = express.Router();
const services = require('../services/render');
const controller = require('../controller/controller');

route.get('/', services.login);

route.get('/Register', services.add_user);

route.get('/userList', services.home);

route.get('/user_data',services.show_user)

route.post('/api/user', controller.create);
route.get('/api/user', controller.find);
route.put('/api/user/:id', controller.update);
route.delete('/api/user/:id', controller.delete);

module.exports = route;