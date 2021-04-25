'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('provider', { 
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
      cnpjCpf:{
        type: Sequelize.STRING,
        allowNull:false
      },
      description:Sequelize.TEXT,
      responsible:{
        type: Sequelize.STRING,
        allowNull:false
      },
      fone:{
        type: Sequelize.STRING,
        allowNull:false
      },
      register:{
        type: Sequelize.TINYINT,
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
    await queryInterface.dropTable('provider');
  }
};
