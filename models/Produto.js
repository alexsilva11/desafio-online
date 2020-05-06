const Produto = (sequelize, DataTypes) => {
    const produto = sequelize.define(
      'Produto',
      {
        id_produto: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: true
        },
        nome: {
          type: DataTypes.STRING,
          allowNull: true
        },
        descricao: {
          type: DataTypes.STRING,
          allowNull: true
        },
        preco: {
          type: DataTypes.FLOAT,
          allowNull: true
        },
        fk_categoria: {
          type: DataTypes.INTEGER,
          allowNull: true
        },
        imagem: {
          type: DataTypes.STRING,
          allowNull: true
        },
        fk_editora: {
          type: DataTypes.INTEGER,
          allowNull: true
        }
      },
      {
        tableName: "produto",
        timestamps: false
      }
    )
    
    // Produto.associate = (models) => {
    //   Produto.belongsTo(models.Produto, {
    //     foreignKey: 'fk_usuario',
    //     as: 'usuario'
    //   });
    //   Produto.hasMany(models.Produto, {
    //     foreignKey: 'fk_Produtos',
    //     as: 'Produtos'
    //   });
    // }
  
    return produto;
  }
  
  module.exports = Produto;