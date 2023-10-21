var express = require('express');
var router = express.Router();

var login = require('../Models/Login');
var signup = require('../Models/Signup');
const { emit } = require('process');

const { body } = require('express-validator');


//Login
router.post('/addlogin', async (req, res) => {
    var objLogin = new login();
    objLogin.email = req.body.email,
    objLogin.password = req.body.password,
    objLogin.addedOn = new Date(),
    objLogin.isActive = true;
    console.log();

    const inserted = await objLogin.save();

    if (inserted != null) {
        res.json({ result: "success", msg: "User Inserted", data: 1 });
    } else {
        res.json({ result: "failure", msg: "User Not Inserted", data: 0 });
    }
});
router.post('/updatelogin',async (req, res) => {
    console.log(req.body.id)
        const objLogin = await login.updateOne({
            _id: req.body.id
        }, {
            email: req.body.email,
            password: req.body.password
        });
        
        if (objLogin != null) {
            res.json({ result: "success", msg: "User update", data: 1 });
        } else {
            res.json({ result: "failure", msg: "User Not update", data: 0 });
        }
});
router.delete('/deletelogin/:id', async (req, res) => {
    console.log(req.params.id);
    const objDeleteLogin = await login.updateOne({
        _id: req.params.id
    },{
        isActive : false
    });
    if (objDeleteLogin != null) {
        res.json({ result: "success", msg: "User deleted", data: 1 });
    } else {
        res.json({ result: "failure", msg: "User Not deleted", data: 0 });
    }
});
router.get('/fetchlogin/:id', async (req, res) => {
    const fetchLoginObj = await login.findOne({
        _id: req.params.id
    });

    if (fetchLoginObj != null) {
        res.json({ result: "success", msg: "User Fetch", data: fetchLoginObj });
    } else {
        res.json({ result: "failure", msg: "User Not Fetch", data: fetchLoginObj});
    }
});
router.get('/fetchlogin', async (req, res) => {
    const fetchLoginObj = await login.find({
        isActive:true,
    });

    if (fetchLoginObj != null) {
        res.json({ result: "success", msg: "User List Load", data: fetchLoginObj });
    } else {
        res.json({ result: "failure", msg: "unsuccessfull", data: fetchLoginObj});
    }
});

//Signup
router.post('/addsignup', async (req, res) => {
    var objSignup = new signup();
    objSignup.email = req.body.email,
    objSignup.password = req.body.password,
    objSignup.confirmpassword = req.body.confirmpassword,
    objSignup.addedOn = new Date(),
    objSignup.isActive = true;
    console.log();

    const inserted = await objSignup.save();

    if (inserted != null) {
        res.json({ result: "success", msg: "User Inserted", data: 1 });
    } else {
        res.json({ result: "failure", msg: "User Not Inserted", data: 0 });
    }
});
router.post('/updatesignup',async (req, res) => {
    console.log(req.body.id)
        const objSignup = await signup.updateOne({
            _id: req.body.id
        }, {
            email: req.body.email,
            password: req.body.password,
            confirmpassword: req.body.confirmpassword,
        });
        
        if (objSignup != null) {
            res.json({ result: "success", msg: "User update", data: 1 });
        } else {
            res.json({ result: "failure", msg: "User Not update", data: 0 });
        }
});
router.delete('/deletesignup/:id', async (req, res) => {
    console.log(req.params.id);
    const objDeleteSignup = await signup.updateOne({
        _id: req.params.id
    },{
        isActive : false
    });
    if (objDeleteSignup != null) {
        res.json({ result: "success", msg: "User deleted", data: 1 });
    } else {
        res.json({ result: "failure", msg: "User Not deleted", data: 0 });
    }
});
router.get('/fetchsignup/:id', async (req, res) => {
    const fetchSignupObj = await signup.findOne({
        _id: req.params.id
    });

    if (fetchSignupObj != null) {
        res.json({ result: "success", msg: "User Fetch", data: fetchSignupObj });
    } else {
        res.json({ result: "failure", msg: "User Not Fetch", data: fetchSignupObj});
    }
});
router.get('/fetchSignup', async (req, res) => {
    const fetchSignupObj = await signup.find({
        isActive:true,
    });

    if (fetchSignupObj != null) {
        res.json({ result: "success", msg: "User List Load", data: fetchSignupObj });
    } else {
        res.json({ result: "failure", msg: "unsuccessfull", data: fetchSignupObj});
    }
});

module.exports = router;