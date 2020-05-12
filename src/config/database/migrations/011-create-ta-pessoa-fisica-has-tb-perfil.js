'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ta_pessoa_fisica_has_tb_perfils', {
      fk_id_pessoa_fisica: {
        type: Sequelize.BIGINT,
        references: { model: 'tb_pessoa_fisica', key: 'id_pessoa_fisica' },
        primaryKey: true,
        allowNull: false
      },
      fk_id_perfil: {
        references: { model: 'tb_perfil', key: 'id_perfil' },
        type: Sequelize.BIGINT,
        primaryKey: true,
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
    return queryInterface.dropTable('ta_pessoa_fisica_has_tb_perfils');
  }
};