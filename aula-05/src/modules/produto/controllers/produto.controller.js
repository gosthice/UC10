const produtoModel = require('../models/produto.model');

class ProdutoController {
   static async criar (req, res) {
      const {nome, preco, estoque} = req.body;
      const produto = produtoModel.create({nome, preco, estoque})
   }
}

module.exports = ProdutoController;