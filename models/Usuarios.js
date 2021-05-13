const db = require('./db')

const Usuarios = db.sequelize.define('usuarios',{
    CPF:{
        type: db.Sequelize.INTEGER,
        primaryKey: true
    },
    Avaliacao: {
        type: db.Sequelize.FLOAT
    },
    p_nome:{
        type: db.Sequelize.STRING
    },
    sobrenome:{
        type: db.Sequelize.STRING
    },
    email:{
        type: db.Sequelize.STRING
    }
});

//Post.sync({force:true})

module.exports = Usuarios