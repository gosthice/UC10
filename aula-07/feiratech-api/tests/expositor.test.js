const { sequelize } = require('.././database/config/configDB');

const ExpositorModel = require('../src/modules/expositor/models/expositor.model');
const ExpositorController = require('../src/modules/expositor/controllers/expositor.controller');

beforeAll (async () => {
   await sequelize.sync({ force: true });
});
afterAll (async () => {
   await sequelize.close();
});
afterEach (async () => {
   await ExpositorModel.truncate();
});

describe('Testes do Expositor Controller - Cadastrar Produto', () => {
   test('Deve criar um expositor corretamente no banco de dados', async () => {
      const req = { body: {id: 1, nome: 'Marcos', email: 'marcos1@gmail.com', instituicao: 'Algo'}}
      const expositor = await ExpositorController.cadastrar(req);

      expect(expositor). to
   })
})