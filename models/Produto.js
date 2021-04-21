module.exports = (sequelize, DataType) => {
  const Produto = sequelize.define('Produto', {
    id:{
      type:DataType.INTERGER,
      primaryKey:true,
      autoIncrement:true
    },
    nome:{ 
      type: DataType.STRING,
      allowNull:false},
      imagem:{
      type: DataType.STRING
    },
    descricao:{
      type: DataType.TEXT,
      allowNull:false
    },
    preco:{
      type:DataType.DECIMAL,
      allowNull:false
    },
    qtd_disponivel:{
      type: DataType.INTERGER,
      allowNull:false
    },
    fk_fornecedor_produto:{
      type: DataType.INTERGER
    },
    fk_categoria_produto:{
      type: DataType.STRING,
      allowNull:false
    }
  },{
    tableName:"produto",
    timestamps:true
  })
  
  Produto.associate = (model) =>{
    Produto.belongsTo(model.Fornecedor,{
      foreignKey:"fk_fornecedor_produto",
      as:'fornecedor'
    })
    Produto.belongsTo(model.Categoria,{
      foreignKey:"fk_categoria_produto",
      as:"categoria"
    })
  }

  return EnderecoCliente;
}