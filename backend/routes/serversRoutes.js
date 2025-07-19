const express = require('express');
const router = express.Router();
const serversController = require('../controllers/serversController');

router.get('/', serversController.getServers);

module.exports = router; 