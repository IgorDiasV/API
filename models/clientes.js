const db = require('./db')

const clientes = db.sequelize.define('clientes',{
    c_cpf: {
        type: db.Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {         // User belongsTo Company 1:1
          model: 'usuarios',
          key: 'cpf'
        }
      }  
});

//Post.sync({force:true})

module.exports = clientes