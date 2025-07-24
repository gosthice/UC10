const produtoModel = require('../models/produto.model');

class ProdutoController {
   static async criar (req, res) {
      const {nome, preco, estoque} = req.body;
      if (!nome || !preco || !estoque) {
         throw new Error('Todos os campos devem ser preenchidos.')
      };
      return 
   }
}

module.exports = ProdutoController;