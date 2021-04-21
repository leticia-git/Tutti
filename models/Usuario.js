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
    },
    fk_dado_usuario:DataType.INTERGER
  },{
    tableName:"usuario",
    timestamps:true
  })
  
  Usuario.associate = (model) =>{
    Usuario.belongsTo(model.Dado,{
      foreignKey:"fk_dado_usuario",
      as:'dados'
    })

  }
  return Usuario
}