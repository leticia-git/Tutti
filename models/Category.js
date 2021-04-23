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
    tableName:"categories",
    timestamps:true
  });
  
  Category.associate = (models) =>{
    Category.hasMany(models.Product,{as:'product'})
    Category.hasMany(models.Recipe,{as:'recipe'})
  };

  return Category
}