const router = require('express').Router();
const User = require('../models/user');
router.get('/',(req, res, next) => {
    res.render('main/landing');
});

router.get('/create-new-user',(req, res, next) => {
    var user = new User();
    user.email = "blabla@bla.bla";
    user.name = "jack";
    user.password = "hello";
    user.save(function(err){
        if(err) return err
        res.json("success");
    })
});
module.exports = router;