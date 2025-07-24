const express = require('express');
const ProdutoControllerApi = require('../controllers/produtoApi.controller')
const router = express.Router();

router.post('/', ProdutoControllerApi.criarProduto);

module.exports = router;