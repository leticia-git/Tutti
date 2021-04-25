module.exports = (sequelize, DataType) => {
  const Order = sequelize.define('Order', {
    id:{
      type:DataType.INTEGER,
      primaryKey:true,
      autoIncrement:true,
      allowNull:false
    },
    distance:{
      type: DataType.FLOAT,
      allowNull:false
    },
    distancePrice:{
      type: DataType.FLOAT,
      allowNull:false
    },
    total:{
      type: DataType.FLOAT,
      allowNull:false
    },
    userAddressId:{
      type: DataType.INTEGER,
      allowNull:false
    },
    userId:{
      type: DataType.INTEGER,
      allowNull:false
    },
    paymentId:{
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
    tableName:"order",
    timestamps:true
  });
  
  Order.associate = (models) =>{
    Order.belongsToMany(models.Courier,{
      foreignKey:'orderId',
      as:'delivery',
      through:models.Delivery
    })
    Order.belongsToMany(models.Product,{
      foreignKey:'orderId',
      as:'product',
      through:models.OrderItem
    })
    Order.belongsTo(models.User,{
      as:'user'
    })
    Order.belongsTo(models.Payment,{
      as:'payment'
    })
    Order.belongsTo(models.UserAddress,{
      as:'userAddress'
    })
  }

  return Order
}