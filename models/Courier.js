module.exports = (sequelize, DataType) => {
  const Courier = sequelize.define('Courier', {
    id:{
      type:DataType.INTEGER,
      primaryKey:true,
      autoIncrement:true,
      allowNull:false
    },
    name:{
      type: DataType.STRING,
      allowNull:false
    },
    lastName:{
        type: DataType.STRING,
        allowNull:false
    },
    vehicle:{
      type: DataType.STRING,
      allowNull:false
    },
    licensePlate:{
      type: DataType.STRING,
      allowNull:false
    },
    register:{
      type: DataType.TINYINT,
      allowNull:false
    },
    status:{
      type: DataType.TINYINT,
      allowNull:false
    },
    createdAt:{
      type:DataType.DATE,
      allowNull:false
    },
    updatedAt:{
      type:DataType.DATE,
      allowNull:false
    }
  },{
    tableName:"courier",
    timestamps:true
  });
  
  Courier.associate = (models) =>{
    Courier.belongsToMany(models.Order,{
      foreignKey:'courierId',
      as:'order',
      through:models.Delivery
    });
  };

  return Courier
}