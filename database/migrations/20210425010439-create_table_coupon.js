'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('coupon', { 
      id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
      },
      type:{
        type: Sequelize.TINYINT,
        allowNull:false
      },
      name:{
          type: Sequelize.STRING,
          allowNull:false
      },
      discount:{
        type: Sequelize.FLOAT,
        allowNull:false
      },
      status:{
        type: Sequelize.TINYINT,
        allowNull:false
      },
      createdAt:{
        type:Sequelize.DATE,
        allowNull:false
      },
      updatedAt:{
        type:Sequelize.DATE,
        allowNull:false
      } 
    },{
      freezeTableName:true
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('coupon');
  }
};
