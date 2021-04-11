'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pagamentos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  pagamentos.init({
    pagamentos: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'pagamentos',
  });
  return pagamentos;
};