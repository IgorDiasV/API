const db = require('./db')

const motoristas = db.sequelize.define('motoristas',{
    m_cpf: {
        type: db.Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {         // User belongsTo Company 1:1
          model: 'usuarios',
          key: 'cpf'
        }
      },
    Qt_viagem: {
        type: db.Sequelize.INTEGER
    },
    Taxa_aceitacao: {
        type: db.Sequelize.FLOAT
    },
    Taxa_cancelamento: {
        type: db.Sequelize.FLOAT
    }
});

//motoristas.sync({force:true})

module.exports = motoristas