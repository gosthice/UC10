const express = require('express');
const { sequelize } = require('./src/config/configDB');
const ProdutosRoutes = require('./src/modules/produto/models/produto.model');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use('/produtos', ProdutosRoutes);

// await sequelize.sync({ force: true })

app.listen(PORT, ()=>{
   console.log(`aplicação rodando em http://localhost:${PORT}`); 
})

module.exports = app;