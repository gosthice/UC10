const { sequelize } = require('../../config/configDB');
const Produto = require('../produto/models/produto.model');
const ProdutoController = require('../produto/controllers/produto.controller.js');

beforeAll (async () => {
   await sequelize.sync({ force: true })
})

afterAll (async () => {
   await sequelize.close();
})

describe('Testes do Produto Controller', () => {
   // Aqui estamos realizando uma requisiçao para a criaçao do produto
   test('Deve criar um produto no banco de dados', async () => {
      const produto = await ProdutoController.criar({
         nome: 'Feijão', preco: '4.90', estoque: 500
      })
      // Analisamos a const para verificar os dados retornado
      expect(produto).toHaveProperty('cod_prod');
      expect(produto.nome).toBe('Feijão');
      expect(produto.preco).to
   })
})