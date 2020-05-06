'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tb_login', {
      id_login: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      cpf: {
        allowNull: false,
        type: Sequelize.STRING(11)
        /* Postgresql não aceita zeros a esquerda
      type: Sequelize.BIGINT(11).ZEROFILL.UNSIGNED
      */
      },
      senhacript: {
        allowNull: false,
        type: Sequelize.STRING(256)
      },
      token: {
        allowNull: false,
        type: Sequelize.STRING(256)
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
    return queryInterface.dropTable('tb_login');
  }
};