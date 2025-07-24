const express = require('express');
const router = express.Router();
const ExpositorController = require('../controllers/expositor.controller');

router.post('/expositores', ExpositorController.cadastrar);

module.exports = router;