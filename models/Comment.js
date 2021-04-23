module.exports = (sequelize, DataType) => {
  const Comment = sequelize.define('Comment', {
    id:{
      type:DataType.INTEGER,
      primaryKey:true,
      autoIncrement:true,
      allowNull:false
    },
    comment:{
      type: DataType.TEXT,
    },
    rating:DataType.FLOAT,
    userId:{
      type: DataType.INTEGER,
      allowNull:false
    },
    productId:{
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
    tableName:"comments",
    timestamps:true
  });
  
  Comment.associate = (models) =>{
    Comment.belongsTo(models.Product,{
      foreignKey:'productId',
      as:'product'
    })
    Comment.belongsTo(models.User,{
      foreignKey:'userId',
      as:'user'
    })
  };

  return Comment
}