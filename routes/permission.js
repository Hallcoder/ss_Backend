const express = require('express');
const { signPermission, updatePermission, getPermissions, deletePermission, getPermission } = require('../controllers/permissions');
const router = express.Router();

router
.post('/sign',signPermission())
.put('/:id',updatePermission())
.get('/',getPermissions())
.get('/:id',getPermission())
.delete('/:id',deletePermission());
module.exports.Prouter = router;