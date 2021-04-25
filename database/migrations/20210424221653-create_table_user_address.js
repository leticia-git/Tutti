'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('user_address', { 
      id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
      },
      road:{ 
        type: Sequelize.STRING,
        allowNull:false},
      number:{
        type: Sequelize.STRING,
        allowNull:false
      },
      district:{
        type: Sequelize.STRING,
        allowNull:false
      },
      complement:Sequelize.STRING,
      cep:{
        type: Sequelize.STRING,
        allowNull:false
      },
      city:{
        type: Sequelize.STRING,
        allowNull:false
      },
      state:{
        type: Sequelize.STRING,
        allowNull:false
      },
      addressee:{
        type: Sequelize.STRING
      },
      fone:{
        type: Sequelize.STRING
      },
      userId:{
        type:Sequelize.INTEGER,
        allowNull: false,
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
    await queryInterface.dropTable('user_address');
  }
};
