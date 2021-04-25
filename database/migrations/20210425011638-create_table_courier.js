'use strict';


module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('courier', {
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
      lastName:{
          type: Sequelize.STRING,
          allowNull:false
      },
      vehicle:{
        type: Sequelize.STRING,
        allowNull:false
      },
      licensePlate:{
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
    await queryInterface.dropTable('courier');
  }
};
