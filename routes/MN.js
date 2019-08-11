var express = require('express');
var router = express.Router();

// Require controller modules.
var mn_controller = require('../controllers/MNController');

// GET MN  home page.
router.get('/', mn_controller.MN_list);


module.exports = router;