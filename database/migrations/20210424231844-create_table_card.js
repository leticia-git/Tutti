'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('card', { 
      id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
      },
      flag:Sequelize.STRING,
      cardNumber:{
        type: Sequelize.STRING,
        allowNull:false
      },
      cardholder:{
        type: Sequelize.STRING,
        allowNull:false
      },
      expiration:{
        type: Sequelize.DATE,
        allowNull:false
      },
      userId:{
      type:Sequelize.INTEGER,
      allowNull:false,
      references:{
        model:{
          tableName:'user'
        },
        key:'id'
      }
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
    await queryInterface.dropTable('card');
  }
};
