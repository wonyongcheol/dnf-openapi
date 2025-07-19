const express = require('express');
const router = express.Router();
const characterController = require('../controllers/characterController');

router.get('/character', characterController.searchCharacter);

module.exports = router; 