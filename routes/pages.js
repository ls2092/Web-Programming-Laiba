const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth')


router.get("/index",(req,res) =>{
    res.render('index');
});

router.get('/',(req, res) => {
    res.render('index' , {
        user: req.user   //passing the user object to template
    });
});

router.get('/register',(req, res) => {
    res.render('register')
});

router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/profile', authController.isLoggedIn, (req, res) => {
    console.log("this is the user from the req of the profile", req.user)
    // Route logic for the profile page for users that are authentic
    res.render('profile', { user: req.user }); //  user information is available in req.user
});


router.get('/profile', (req, res) => {
   const user = {
    id: req.query.id,
    name: req.query.name,
    email: req.query.email
   };
    
    res.render('profile', { user}); 
});

module.exports = router;