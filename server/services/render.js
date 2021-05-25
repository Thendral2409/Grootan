const axios = require('axios');

exports.login = (req, res) => {
    res.render('login');
}

exports.home = (req, res) => {
    axios.get('http://localhost:3000/api/user/')
        .then(apires => {
            res.render('index', { users: apires.data });
        })
        .catch(error => {
            res.send(error);
        });
}
exports.add_user = (req, res) => {
    res.render('add_user');
}

exports.show_user = (req, res) => {
    axios.get('http://localhost:3000/api/user?id=' + req.query.id)
        .then(apires => {
            res.render('update_user', { user: apires.data });
        })
        .catch(error => {
            res.send(error);
        });
}