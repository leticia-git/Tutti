module.exports = (sequelize, DataType) => {
  const Dado = sequelize.define('Dado', {
    id:{
      type:DataType.INTERGER,
      primaryKey:true,
      autoIncrement:true
    },
    nome:DataType.STRING,
    sobrenome:{
      type: DataType.STRING,
      allowNull:false
    },
    cpf:{
      type: DataType.STRING,
      allowNull:false
    },
    telefone:{
      type: DataType.STRING,
      allowNull:false
    },
    fk_usuario:DataType.INTERGER
  },{
    tableName:"dado",
    timestamps:true
  });
  
  Dado.associate = (model) =>{
    Dado.belongsTo(model.Usuario,{
      foreignKey:"fk_usuario",
      as:'usuario'
    })
    Usuario.hasMany(model.EnderecoCliente,{foreignKey:'fk_dado_endereco',as:'endereco'})
    Usuario.hasMany(model.Cartao,{foreignKey:'fk_dado_cartao', as:'cartao'})
  };

  return Dado;
}