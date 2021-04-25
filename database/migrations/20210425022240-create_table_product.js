'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('product', { 
      id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
      },
      name:{ 
        type: Sequelize.STRING,
        allowNull:false
      },
      picture: Sequelize.STRING,
      description:Sequelize.TEXT,
      price:{
        type:Sequelize.FLOAT,
        allowNull:false
      },
      stock:{
        type: Sequelize.FLOAT,
        allowNull:false
      },
      providerId:{
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:{
            tableName:'provider'
          },
          key:'id'
        }
      },
      categoryId:{
        type: Sequelize.INTEGER,
        allowNull:false,
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
    },
    {
      freezeTableName:true
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('product');
  }
};
