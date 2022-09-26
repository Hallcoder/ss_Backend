const { saveUser, checkUser } = require('../controllers/user');

const router = require('express').Router();

router
.post('/save',saveUser())
.get('/get/:id',checkUser())
module.exports.Urouter = router;