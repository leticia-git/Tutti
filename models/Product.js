module.exports = (sequelize, DataType) => {
  const Product = sequelize.define('Product', {
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
    picture: DataType.STRING,
    description:DataType.TEXT,
    price:{
      type:DataType.FLOAT,
      allowNull:false
    },
    stock:{
      type: DataType.FLOAT,
      allowNull:false
    },
    providerId:{
      type: DataType.INTEGER,
      allowNull:false
    },
    categoryId:{
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
    tableName:"product",
    timestamps:true
  })
  
  Product.associate = (models) =>{
    Product.belongsTo(models.Provider,{
      as:'provider'
    });
    Product.belongsTo(models.Category,{
      as:"category"
    });
    Product.belongsToMany(models.Order,{
      foreignKey:'productId',
      as:'orders',
      through:models.OrderItem
    });
    Product.hasMany(models.Comment,{
      foreignKey:'productId',
      as:'comment'});
  }

  return Product;
}