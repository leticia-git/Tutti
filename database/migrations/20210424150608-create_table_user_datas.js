'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('user_data', { 
      id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
      },
      fullname:{
        type: Sequelize.STRING,
        allowNull:false
      },
      cpf:{
        type: Sequelize.STRING,
        allowNull:false
      },
      fone:{
        type: Sequelize.STRING,
        allowNull:false
      },
      birth:{
        type: Sequelize.STRING,
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
    await queryInterface.dropTable('user_data');
  }
};
