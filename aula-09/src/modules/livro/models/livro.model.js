const { DataTypes } = ('sequelize');
const { sequelize } = require('../../../../database/config/configDB');

const LivroModel = sequelize.define(
   'Livro',
   {
      id: {
         type: DataTypes.INTEGER,
         primaryKey: true
      },

      titulo: {
         type: DataTypes.STRING,
         allowNull: false
      },

      autor: {
         type: DataTypes.STRING,
         allowNull: false
      },

      ano_publicacao: {
         type: DataTypes.DATE,
         allowNull: false
      },

      genero: {
         type: DataTypes.STRING,
         allowNull: false
      },

      preco: {
         type: DataTypes.DECIMAL(10, 2),
         allowNull: false
      }
   }
);

module.exports = LivroModel;