const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

router.post('/', usuarioController.cadastrar);
router.get('/', usuarioController.listarUsuarios);
router.delete('/', usuarioController.removerUsuario);

module.exports = router;