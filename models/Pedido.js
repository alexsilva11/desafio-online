const Pedido = (sequelize, DataTypes) => {
    const pedido = sequelize.define(
      'Pedido',
      {
        id_pedido: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: true
        },
        status: {
          type: DataTypes.STRING,
          allowNull: true
        },
        fk_usuario: {
          type: DataTypes.INTEGER,
          allowNull: true
        }
      },
      {
        tableName: "pedido",
        timestamps: false
      }
    )
    
    pedido.associate = (models) => {
      pedido.belongsTo(models.Usuario, {
        foreignKey: 'fk_usuario',
        as: 'usuario'
      });
    }
  
    return pedido;
  }
  
  module.exports = Pedido;