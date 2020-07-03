'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tb_log_acoes_sistema', {
      id_log_acoes_sistema: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      fk_id_pessoa: {
        type: Sequelize.BIGINT,
        references: { model: 'tb_pessoa_fisica', key: 'id_pessoa_fisica' }
      },
      fk_id_perfil: {
        type: Sequelize.BIGINT,
        references: { model: 'tb_perfil', key: 'id_perfil' }
      },
      acao: {
        type: Sequelize.STRING(500)
      },
      dt_ultimo_acesso: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('tb_log_acoes_sistema');
  }
};