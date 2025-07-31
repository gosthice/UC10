const request = require('supertest');
const UsuarioModel = require('../src/models/usuarioModel');
const app = require('../index');
const { listarUsuarios } = require('../src/controllers/usuarioController');
const usuarioModel = require('../src/models/usuarioModel');

//Primeiro devemos preparar o mock em Model
jest.mock('../src/models/usuarioModel', () => ({
   salvarUsuario: jest.fn(),
   listarUsuarios: jest.fn()
}));

describe('Testes para a rota de POST /usuarios', () => {
   test('Deve cadsatrar corretamente um usuario', async () => {
      const userMoco = { id: 1, nome: 'Joel', senha: 9090 };
      UsuarioModel.salvarUsuario.mockResolvedValue(userMoco);  //Tipo de retorno --> sempre ser a const userMoco
      const res = await request(app).post('/usuarios').send({ nome: 'Joel', senha: 9090 });
      
      expect(res.status).toBe(201);
      expect(res.body.usuario).toEqual(userMoco);
      expect(UsuarioModel.salvarUsuario).toHaveBeenCalledWith({ nome: 'Joel', senha: 9090 });
   })
})

describe('Testes para a rota GET /usuarios', () => {
   test('Deve listar corretamente os usuarios', async () => {
      const usersMock = [{ id: 1, nome: 'Joel', senha: 9090 }, { id: 2, nome: 'Valtemir', senha: 8080 }];
      UsuarioModel.listarUsuarios.mockResolvedValue(usersMock);
      const res = await request(app).get('/usuarios');
      
      expect(res.status).toBe(200);
      expect(Array.isArray(res.body)).toBeTruthy();
      expect(res.body.length).toBeGreaterThan(1);
      expect(UsuarioModel.listarUsuarios).toHaveBeenCalledWith();
   })
})

describe('Testes para a rota DELETE /usuarios', () => {
   test('Deve deletar corretamente os usuarios', async () => {
      const usersMock = [{ id: 1, nome: 'Joel', senha: 9090 }, { id: 2, nome: 'Valtemir', senha: 8080 }];
      UsuarioModel.listarUsuarios.mockResolvedValue(usersMock);
      const res = await request(app).delete('/usuarios');
      
      expect(res.status).toBe(200);
      expect(Array.isArray(res.body)).toBeTruthy();
      expect(res.body.length).toBeGreaterThan(1);
      expect(UsuarioModel.listarUsuarios).toHaveBeenCalledWith();
   })
})