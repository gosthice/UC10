const ExpositorModel = require('../models/expositor.model');

class ExpositorController {
   static async cadastrar(req, res) {
      try {
         const { id, nome, email, instituicao } = req.body;

         if ( !id || !nome || !email || !instituicao ) {
            throw new Error('Todos os campos devem ser preenchidos')
         }

         return
      } catch (error) {
         
      }
   }
};

module.exports = ExpositorController;