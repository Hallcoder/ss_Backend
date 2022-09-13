const express = require('express');
const { signPermission, updatePermission, getPermissions } = require('../controllers/permissions');
const router = express.Router();

router
.post('/sign',signPermission())
.put('/update/:id',updatePermission())
.get('/',getPermissions())
module.exports.Prouter = router;