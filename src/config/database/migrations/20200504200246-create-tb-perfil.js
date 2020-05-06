'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tb_perfil', {
      id_perfil: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      tipo: {
        type: Sequelize.ENUM('ativa', 'reserva', 'graduado', 'oficial', 'deleted'),
        defaultValue: 'ativa',
        notNull: true,
      },
      descricao: {
        type: Sequelize.STRING(100)
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
    return queryInterface.dropTable('tb_perfil');
  }
};