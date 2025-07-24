const { DataTypes } = ('sequelize');
const { sequelize } = require('../../../../database/config/configDB');

const ExpositorModel = sequelize.define(
   'Expositor',
   {
      id: {
         type: DataTypes.INTEGER,
         primaryKey: true
      },

      nome: {
         type: DataTypes.STRING,
         allowNull: false
      },

      email: {
         type: DataTypes.STRING,
         allowNull: false,
         unique: true
      },
      
      instituicao: {
         type: DataTypes.STRING,
         allowNull: false
      }
   }
);

module.exports = ExpositorModel;