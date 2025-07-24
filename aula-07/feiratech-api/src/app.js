const express = require('express');
const { sequelize } = require('../database/config/configDB');
const ExpositorRoutes = require('./modules/expositor/routes/expositor.route');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use('/expositores', ExpositorRoutes);

app.listen(PORT, () => {
   console.log(`aplicação rodando em http://localhost:${PORT}`);
})

module.exports = app;