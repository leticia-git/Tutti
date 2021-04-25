'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('recipe', { 
      id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
      },
      title:{ 
        type: Sequelize.STRING,
        allowNull:false
      },
      ingredients:{
        type: Sequelize.TEXT,
        allowNull:false
      },
      preparation:{
        type: Sequelize.TEXT,
        allowNull:false
      },
      yield:Sequelize.STRING,
      cost:Sequelize.STRING,
      categoryId:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model:{
            tableName:'category'
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
    await queryInterface.dropTable('recipe');
  }
};
