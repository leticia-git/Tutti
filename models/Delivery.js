module.exports = (sequelize, DataType) => {
  const Delivery = sequelize.define('Delivery', {
    id:{
      type:DataType.INTEGER,
      primaryKey:true,
      autoIncrement:true,
      allowNull:false
    },
    received:{
      type: DataType.DATE,
      allowNull:false
    },
    delivered:DataType.DATE,
    courierId:{
      type: DataType.INTEGER,
      allowNull:false
    },
    orderId:{
      type: DataType.INTEGER,
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
    tableName:"delivery",
    timestamps:true
  });
  
  return Delivery
}