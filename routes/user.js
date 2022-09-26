const { saveUser, checkUser } = require('../controllers/user');

const router = require('express').Router();

router
.post('/save',saveUser())
.get('/get/:token',checkUser())
module.exports.Urouter = router;