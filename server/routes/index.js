const express = require('express');
const router = express.Router();

const controller = require('../controller/colors.js')

router.get('/', controller.colors);

module.exports = router;
