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
      fk_id_posto: {
        references: { model: 'tb_posto', key: 'id_posto' },
        type: Sequelize.BIGINT,
        allowNull: false
      },
      fk_id_quadro: {
        references: { model: 'tb_quadro', key: 'id_quadro' },
        type: Sequelize.BIGINT,
        allowNull: false
      },
      fk_id_om: {
        references: { model: 'tb_om', key: 'id_om' },
        type: Sequelize.BIGINT,
        allowNull: false
      },
      fk_id_cfr: {
        references: { model: 'tb_cargo_funcao_relevante', key: 'id_cfr' },
        type: Sequelize.BIGINT,
        allowNull: true
      },
      fk_id_turma: {        
        references: { model: 'tb_turma', key: 'id_turma' },
        type: Sequelize.BIGINT,
        allowNull: false
      },
      fk_id_login: {
        references: { model: 'tb_login', key: 'id_login' },
        type: Sequelize.BIGINT,
        allowNull: true
      },
      nome_pessoa: {
        type: Sequelize.STRING(150),
        allowNull: false
      },
      nome_guerra: {
        type: Sequelize.STRING(60),
        allowNull: false
      },
      nr_ordem: {
        type: DataTypes.STRING(30),
        allowNull: false
      },
      nr_cpf: {
        type: DataTypes.STRING(16),
        allowNull: false
      },
      nr_ident_aer: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      dt_nascimento: {
        type: Sequelize.DATE,
        allowNull: false
      },
      nr_antiguidade: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      nr_antig_sigpes: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      vl_med_cfr: {
        type: Sequelize.DOUBLE(11, 2),
        allowNull: true
      },
      foto: {
        type: Sequelize.BLOB,
        allowNull: false
      },
      dt_praca: { //Primeira Data de Praça dtPraca
         type: Sequelize.DATE, 
        allowNull: false
      },
      dt_praca_ultima: { //Última Data de Praça x
         type: Sequelize.DATE,
        allowNull: false
      },
      dt_formacao_sigpes: { //Data Formação SIGPES x
         type: Sequelize.DATE,
        allowNull: false
      },
      st_militar: { //Situação Militar x
         type: Sequelize.STRING(10),
        allowNull: false
      },
      dt_ultima_promocao: { //Data Última Promoção dtPromocaoAtual
         type: Sequelize.DATE,
        allowNull: false
      },
      tx_tempo_servico: { //Tempo de Serviço txTempoServico
         type: Sequelize.STRING(10),
        allowNull: false
      },
      st_quadro_sigpes: { //Situação Quadro SIGPES x
         type: Sequelize.STRING(10),
        allowNull: false
      },
      st_quadro_cpo: { //Situação Quadro CPO x
         type: Sequelize.STRING(10),
        allowNull: false
      },
      cor_raca: { // x
         type: Sequelize.STRING(10),
        allowNull: false
      },
      especialidade: { //sgEspd
         type: Sequelize.STRING(40),
        allowNull: false
      },
      sexo: { //sgSexo
         type: Sequelize.STRING(10),
        allowNull: false
      },
      funcao_local_om: { //sgFncoLocal
         type: Sequelize.STRING(50),
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
    return queryInterface.dropTable('tb_pessoa_fisica');
  }
};