'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tb_turma', {
      id_turma: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      fk_id_quadro: {
        allowNull: false,
        type: Sequelize.BIGINT,
        references: { model: 'tb_quadro', key: 'id_quadro' }
      },
      no_turma: {
        type: Sequelize.STRING(150)
      },
      dt_formacao_turma: {
        allowNull: false,
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
    return queryInterface.dropTable('tb_turma');
  }
};