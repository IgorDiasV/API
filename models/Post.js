const db = require('./db')

const Post = db.sequelize.define('usuario',{
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

module.exports = Post