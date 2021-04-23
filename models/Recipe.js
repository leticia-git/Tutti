module.exports = (sequelize, DataType) => {
  const Recipe = sequelize.define('Recipe', {
    id:{
      type:DataType.INTEGER,
      primaryKey:true,
      autoIncrement:true,
      allowNull:false
    },
    title:{ 
      type: DataType.STRING,
      allowNull:false
    },
    ingredients:{
      type: DataType.TEXT,
      allowNull:false
    },
    preparation:{
      type: DataType.TEXT,
      allowNull:false
    },
    yield:DataType.STRING,
    cost:DataType.STRING,
    categoryId:{
      type: DataType.INTEGER,
      allowNull: false
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
    tableName:"recipes",
    timestamps:true
  })
  
  Recipe.associate = (models) =>{
    Recipe.belongsTo(models.Category,{
      foreignKey:'categoryId',
      as:'categoria'
    })
  }

  return Recipe;
}