const router = require('express').Router();
let User = require('../Models/UserModel');

router.route('/').get((request, result) => {
    User.find()
    .then(users => result.json(users))
    .catch(err => result.status(400).json('error' + err));
});

router.route('/add').post((req, result) => {
    const user = new User({
            "EmployeeID": req.body.EmployeeID,
            "FirstName": req.body.FirstName? req.body.FirstName:'Enter First Name',
            "LastName":  req.body.LastName? req.body.LastName:'Enter Last Name',
            "Address":  req.body.Address? req.body.Address:'Enter Address',
            "UserRole": {
                "RoleID":  req.body.UserRole? req.body.UserRole.RoleID : 1,
                "RoleName":  req.body.UserRole? req.body.UserRole.RoleName: 'Enter Admin'
            }
    });
    user.save()
        .then(() => 'User added!!')
        .catch(err => result.status(400).json('error' + err));
});

router.route('/delete').delete((req) => {
    console.log(req.body);
    User.deleteOne({ _id : req.body._id})
    .then(function(){
        return 'Data Deleted'; // Success
    }).catch(function(error){
        return error;
    })
});

router.route('/update').put((req, result) => {
    console.log(req);
    const user = new User({
        "_id" : req.body._id,
        "EmployeeID": req.body.EmployeeID,
        "FirstName": req.body.FirstName,
        "LastName":  req.body.LastName,
        "Address":  req.body.Address,
        "UserRole": {
            "RoleID":  req.body.UserRole.RoleID,
            "RoleName":  req.body.UserRole.RoleName
        }
});
user.isNew = false;
    user.save()
        .then(() => 'User updated!!')
        .catch(err => result.status(400).json('error' + err));
});

module.exports = router;