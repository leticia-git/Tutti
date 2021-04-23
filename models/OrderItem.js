module.exports = (sequelize, DataType) => {
  const OrderItem = sequelize.define('OrderItem', {
    id:{
      type:DataType.INTEGER,
      primaryKey:true,
      autoIncrement:true,
      allowNull:false
    },
    price:{
      type: DataType.FLOAT,
      allowNull:false
    },
    quantity:{
      type: DataType.FLOAT,
      allowNull:false
    },
    itemTotal:{
      type: DataType.FLOAT,
      allowNull:false
    },
    orderId:{
      type: DataType.INTEGER,
      allowNull:false
    },
    productId:{
      type: DataType.INTEGER,
      allowNull:false
    }
  },{
    tableName:"orderItems",
    timestamps:false
  });

  return OrderItem
}