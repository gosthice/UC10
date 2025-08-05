const express = require('express');
const router = express.Router();
const LivroController = require('../controller/livro.controller');

router.post('/', LivroController.cadastrar);
// router.get('/', usuarioController.listarUsuarios);
// router.delete('/', usuarioController.removerUsuario);

module.exports = router;