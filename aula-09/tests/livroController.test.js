const Livro = require('../src/modules/livro/models/livro.model');
const { sequelize } = require('../database/config/configDB');
const app = require('../index');
const req = require('supertest');

beforeAll (async () => {
   await sequelize.sync({ force: true });
});

afterAll (async () => {
   await sequelize.close();
});

describe('Livro API', () => {
   let livroId;

   describe('Cadastro', () => {
      test('✅ Deve criar um livro com sucesso', async () => {
         const response = (await req(app).post('/livros')).setEncoding({
            titulo: 'O Senhor dos Anéis',
            autor: 'J.R.R. Tolkien',
            ano_publicacao: 1954,
            genero: 'Fantasia',
            preco: 59.9
         });

         expect(response.statusCode).toBe(201);
      })
   })
})