'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('cart', { 
      id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
      },
      name:{
        type:Sequelize.STRING,
        allowNull:false
      },
      price:{
        type: Sequelize.FLOAT,
        allowNull:false
      },
      quantity:{
        type: Sequelize.INTEGER,
        allowNull:false
      },
      itemTotal:{
        type: Sequelize.FLOAT,
        allowNull:false
      },
      userId:{
        type: Sequelize.INTEGER,
        allowNull:false
      },
      productId:{
        type: Sequelize.INTEGER,
        allowNull:false
      }
    },{
      freezeTableName:true
    });
  },

  down: async (queryInterface, Sequelize) => {
   await queryInterface.dropTable('cart');
  }
};
