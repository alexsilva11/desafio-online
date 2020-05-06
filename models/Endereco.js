const Endereco = (sequelize, DataTypes) => {
    const endereco = sequelize.define(
      'Endereco',
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: true
        },
        endereco: {
          type: DataTypes.STRING,
          allowNull: true
        },
        numero: {
          type: DataTypes.INTEGER,
          allowNull: true
        },
        complemento: {
          type: DataTypes.STRING,
          allowNull: true
        },
        cep: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        uf: {
            type: DataTypes.STRING,
            allowNull: true
        },
        fk_usuario: {
            type: DataTypes.INTEGER
        }
      },
      {
        tableName: "endereco",
        timestamps: false
      }
    )
    
    endereco.associate = (models) => {
      endereco.belongsTo(models.Usuario, {
        foreignKey: 'fk_usuario',
        as: 'usuario'
      });
    }
  
    return endereco;
  }
  
  module.exports = Endereco;