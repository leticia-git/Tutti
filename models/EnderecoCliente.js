module.exports = (sequelize, DataType) => {
  const EnderecoCliente = sequelize.define('EnderecoCliente', {
    id:{
      type:DataType.INTERGER,
      primaryKey:true,
      autoIncrement:true
    },
    logradouro:{ 
      type: DataType.STRING,
      allowNull:false},
    numero:{
      type: DataType.STRING,
      allowNull:false
    },
    bairro:{
      type: DataType.STRING,
      allowNull:false
    },
    complemento:DataType.STRING,
    cep:{
      type: DataType.STRING,
      allowNull:false
    },
    cidade:{
      type: DataType.STRING,
      allowNull:false
    },
    estado:{
      type: DataType.STRING,
      allowNull:false
    },
    destinatario:{
      type: DataType.STRING,
      allowNull:false
    },
    telefone:{
      type: DataType.STRING,
      allowNull:false
    },
    fk_dado_endereco:DataType.INTERGER
  },{
    tableName:"endereco_cliente",
    timestamps:true
  })
  
  EnderecoCliente.associate = (model) =>{
    EnderecoCliente.belongsTo(model.Dado,{
      foreignKey:"fk_dado_endereco",
      as:'cliente'
    })
  }

  return EnderecoCliente;
}