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
    tableName:"products",
    timestamps:true
  })
  
  Product.associate = (models) =>{
    Product.belongsTo(models.Provider,{
      foreignKey:"providerId",
      as:'provider'
    });
    Product.belongsTo(models.Category,{
      foreignKey:"categoryId",
      as:"category"
    });
    Product.belongsToMany(models.Order,{
      foreignKey:'productId',
      as:'orders',
      through:models.OrderItem
    });
    Product.hasMany(models.Comment,{as:'comment'});
  }

  return Product;
}