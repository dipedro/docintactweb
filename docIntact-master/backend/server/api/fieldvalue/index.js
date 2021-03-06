'use strict';

var express = require('express');
var controller = require('./fieldvalue.controller');

var router = express.Router();
var auth = require('../../auth/auth.service');

router.get('/',auth.isAuthenticated(), controller.index);
router.post('/getvalues/',controller.getvalues);
router.post('/',auth.isAuthenticated(), controller.create);
router.post('/updateSharedFields/', controller.updateSharedFields);
router.put('/:id',auth.isAuthenticated(), controller.update);
router.patch('/:id',auth.isAuthenticated(), controller.update);
router.delete('/:id',auth.isAuthenticated(), controller.destroy);
router.post('/getDocFieldValueRecords/',auth.isAuthenticated(), controller.getDocFieldValueRecords);
router.post('/getCurrFieldVal/', controller.getCurrFieldVal);
router.post('/updateFieldValues/',auth.isAuthenticated(), controller.updateFieldValues);

module.exports = router;