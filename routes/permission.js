const express = require('express');
const { signPermission, updatePermission, getPermissions, deletePermission } = require('../controllers/permissions');
const router = express.Router();

router
.post('/sign',signPermission())
.put('/:id',updatePermission())
.get('/',getPermissions())
.delete('/:id',deletePermission());
module.exports.Prouter = router;