const LivroModel = require('../models/livro.model');

class LivroController {
   static async cadastrar(req, res) {
      try {
         const { id, titulo, autor, ano_publicacao, genero, preco } = req.body;
         if (!id || !titulo || !autor || !ano_publicacao || !genero || !preco) {
            res.status(400).json({ msg: "Todos os campos devem ser preenchidos." });
            return;
         }
         const livro = await LivroModel.cadastrar
      } catch (error) {
         
      }
   }
}