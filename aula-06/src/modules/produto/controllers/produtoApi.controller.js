const ProdutoModel = require('../models/produto.model');

class ProdutoControllerApi {
   static async criarProduto(req, res) {
      try {
         const { nome, preco, estoque } = req.body;
         if (!nome || !preco || preco === 0 || !estoque ) {
            const produtoFind = awai
            res.status(201).json({ msg: 'Produto criado com sucesso!', produto: produto });
         }
         const produto = await ProdutoModel.create({ nome, preco, estoque });
      } catch (error) {
         res.status(500).json({ msg: 'Erro interno.', error: error.message})
      }
   }

}

module.exports = ProdutoControllerApi;