const { sequelize, Produto } = require('../models');

Produto.findAll({include: ['categoria', 'editora']}).then(
    data => {
        console.log(data.map( u => u.toJSON()));
        sequelize.close();
    }
)
