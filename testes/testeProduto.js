const { sequelize, Produto } = require('../models');

Produto.findAll().then(
    data => {
        console.log(data.map( u => u.toJSON()));
        sequelize.close();
    }
)
