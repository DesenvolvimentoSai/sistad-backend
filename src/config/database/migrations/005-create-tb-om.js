'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tb_om', {
      id_om: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      nome_om: {
        type: Sequelize.STRING(150),
        allowNull: false
      },
      sg_om: {
        type: Sequelize.STRING(30),
        allowNull: false
      },
      status: {
        type: Sequelize.ENUM('estinta', 'ativa'),
        defaultValue: 'ativa',
        allowNull: false
      },
      sessao: {
        type: Sequelize.STRING(30),
        defaultValue: 'nda',
        allowNull: false
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
    return queryInterface.dropTable('tb_om');
  }
};