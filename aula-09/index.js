const express = require('express');
const app = express();
const LivroRoutes = require('./src/modules/livro/routes/livro.routes');

require('dotenv').config();

const PORT = process.env.PORT;

app.use(express.json());

app.use('/livros', LivroRoutes);

app.listen(PORT, ()=>{
    console.log(`aplicação rodando em: http://localhost:${PORT}`);
});

module.exports = app;
