const express = require('express');
const authController = require('../controllers/authController');
const router = express.Router();




router.post('/register', authController.register,(req, res) => res.status(200).json({}));

module.exports = router;