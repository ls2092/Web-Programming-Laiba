const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth');

router.post('/register', authController.register);
   

// Login route
router.post('/login', authController.login);

// Logout route
router.get('/logout', authController.logout);

// Profile route
//router.get('/profile', authController.isAuthenticated, authController.profile);


module.exports = router;