let UserDB = require('../model/model');

exports.create = (req, res) => {
    // check form request is not empty
    if (!req.body) {
        res.status(400).send({ message: 'Content Cannot Be Empty' });
        return
    }
    console.log(req.body);
    // create user instance
    const user = new UserDB({
        name: req.body.name,
        age: req.body.age,
        Dob: req.body.Dob,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        more: {
            address1: req.body.address1,
            address2: req.body.address2,
            address3: req.body.address3,
            phone: req.body.phone,
        }
    });

    // save user instance 
    user.save()
        .then(data => {
            res.redirect('/');
        })
        .catch(error => {
            res.status(500).send({
                message: error.message || "Some Error Occured while creating New User"
            });
        });

}
exports.find = (req, res) => {

    Vdata = {}
    
    if (req.query.id) {
        const id = req.query.id;
        UserDB.findById(id).then(data => {
            if (!data) {
                res.status(404).send({ message: 'user is not found with the id:' + id });
            } else {
                res.send(data)
            }
        }).catch(error => {
            res.status(500).send({ message: 'Error while finding the User with id :' + id });
        })
    } else {
        UserDB.find()
            .then(data => {
                res.send(data)
            })
            .catch(error => {
                res.status(500).send({
                    message: error.message || "Some Error Occured while Retriving data"
                });
            });
    }
}
exports.update = (req, res) => {
    if (!req.body) {
        return res
            .status(400)
            .send({ message: "Data must be Provided to Update" });
    }

    const id = req.params.id;
    UserDB.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({ message: 'Cannot update user data with ' + id + '. Maybe User Not found.' });
            } else {
                res.send(data);
            }
        })
        .catch(error => {
            res.status(500).send({ message: 'Error while updating the User' });
        })
}
exports.delete = (req, res) => {
    const id = req.params.id;
    UserDB.findByIdAndDelete(id)
        .then(data => {
            if (!data) {
                res.status(404).send({ message: 'Cannot delete user data with ' + id + '. Maybe User Not found.' });
            } else {
                res.send({
                    message: 'User deleted successfully !!'
                })
            }
        }).catch(error => {
            res.status(500).send({ message: 'Error while deleteing the User with id :' + id });
        });

}