const {Router} = require('express');
const router = Router();

// controllers
const {run} = require('../controller/index');



router.get('/', run);

module.exports = router;