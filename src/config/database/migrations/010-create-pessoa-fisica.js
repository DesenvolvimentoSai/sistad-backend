'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tb_pessoa_fisica', {
      id_pessoa_fisica: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      fk_id_foto: {
        references: { model: 'tb_foto', key: 'id_foto' },
        type: Sequelize.BIGINT,
        primaryKey: true,
        allowNull: false
      },
      fk_id_posto: {
        type: Sequelize.BIGINT,
        references: { model: 'tb_posto', key: 'id_posto' }
      },
      fk_id_quadro: {
        type: Sequelize.BIGINT,
        references: { model: 'tb_quadro', key: 'id_quadro' }
      },
      fk_id_om: {
        type: Sequelize.BIGINT,
        references: { model: 'tb_om', key: 'id_om' }
      },
      fk_id_cfr: {
        type: Sequelize.BIGINT,
        references: { model: 'tb_cargo_funcao_relevante', key: 'id_cfr' }
      },
      fk_id_turma: {
        type: Sequelize.BIGINT,
        references: { model: 'tb_turma', key: 'id_turma' }
      },
      fk_id_login: {
        type: Sequelize.BIGINT,
        references: { model: 'tb_login', key: 'id_login' }
      },
      nome_pessoa: {
        type: Sequelize.STRING(150)
      },
      nome_guerra: {
        type: Sequelize.STRING(60)
      },
      nr_ordem: {
        type: DataTypes.STRING(30),
      },
      nr_cpf: {
        type: DataTypes.STRING(16),
      },
      nr_ident_aer: {
        type: Sequelize.INTEGER
      },
      dt_nascimento: {
        type: Sequelize.DATE
      },
      nr_antiguidade: {
        type: Sequelize.INTEGER
      },
      nr_antig_sigpes: {
        type: Sequelize.INTEGER
      },
      vl_med_cfr: {
        type: Sequelize.DOUBLE(11, 2)
      },
      foto: {
        type: Sequelize.BLOB
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
    return queryInterface.dropTable('tb_pessoa_fisica');
  }
};