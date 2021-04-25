module.exports = (sequelize, DataType) => {
  const Category = sequelize.define('Category', {
    id:{
      type:DataType.INTEGER,
      primaryKey:true,
      autoIncrement:true,
      allowNull:false
    },
    category:{
      type: DataType.STRING,
      allowNull: false
    },
    description:DataType.TEXT,
    createdAt:{
      type:DataType.DATE,
      allowNull:false
    },
    updatedAt:{
      type:DataType.DATE,
      allowNull:false
    }
  },{
    tableName:"category",
    timestamps:true
  });
  
  Category.associate = (models) =>{
    Category.hasMany(models.Product,{
      foreignKey:'categoryId',
      as:'product'
    })
    Category.hasMany(models.Recipe,{
      foreignKey:'categoryId',
      as:'recipe'
    })
  };

  return Category
}