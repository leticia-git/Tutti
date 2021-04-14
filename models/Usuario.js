module.exports = (sequelize, DataType) => {
  const Usuario = sequelize.define('Usuario', {
    id:{
      type:DataType.INTERGER,
      primaryKey:true,
      autoIncrement:true
    },
    nome:DataType.STRING,
    email:{
      type: DataType.STRING,
      allowNull:false
    },
    password:{
      type: DataType.STRING,
      allowNull:false
    }
  },{
    tableName:"usuario",
    timestamps:true
  })
  return Usuario
}