'use strict';
export default function (sequelize, DataTypes) {
  const PessoaFisica = sequelize.define('tb_pessoa_fisica', {
    id_pessoa_fisica: {
        type:DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
      },
      fk_id_posto: {
        type:DataTypes.BIGINT,
        allowNull: false
      },
      fk_id_quadro: {
        type:DataTypes.BIGINT,
        allowNull: false
      },
      fk_id_om: {
        type:DataTypes.BIGINT,
        allowNull: false
      },
      fk_id_cfr: { //Cargo Função Relevante
        type:DataTypes.BIGINT,
        allowNull: true
      },
      fk_id_turma: {
        type:DataTypes.BIGINT,
        allowNull: false
      },
      fk_id_login: {
        type:DataTypes.BIGINT,
        allowNull: true
      },
      nome_pessoa: {
        type: DataTypes.STRING(150),
        allowNull: false,
      },
      nome_guerra: {
        type: DataTypes.STRING(60),
        allowNull: false,
      },
      nr_ordem: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
      nr_cpf: {
        type: DataTypes.STRING(16),
        allowNull: false,
      },
      nr_ident_aer: { //Identidade Aeronautica
        type:DataTypes.INTEGER,
        allowNull: true
      },
      dt_nascimento: {
        type:DataTypes.DATE,
        allowNull: false
      },
      nr_antiguidade: {
        type:DataTypes.INTEGER,
        allowNull: true
      },
      nr_antig_sigpes: {
        type:DataTypes.INTEGER,
        allowNull: false
      },
      vl_med_cfr: {//Valor Média Curso de Formação x
        type:DataTypes.DOUBLE(11, 2),
        allowNull: true,
      },
      foto: {
        type:DataTypes.BLOB,
        allowNull: false
      },
      dt_praca: { //Primeira Data de Praça dtPraca
        type:DataTypes.DATE, 
        allowNull: false
      },
      dt_praca_ultima: { //Última Data de Praça x
        type:DataTypes.DATE,
        allowNull: false
      },
      dt_formacao_sigpes: { //Data Formação SIGPES x
        type:DataTypes.DATE,
        allowNull: false
      },
      st_militar: { //Situação Militar x
        type:DataTypes.STRING,
        allowNull: false
      },
      dt_ultima_promocao: { //Data Última Promoção dtPromocaoAtual
        type:DataTypes.DATE,
        allowNull: false
      },
      tx_tempo_servico: { //Tempo de Serviço txTempoServico "00 A 11 M 13 D",
        type:DataTypes.STRING,
        allowNull: false
      },
      st_quadro_sigpes: { //Situação Quadro SIGPES x
        type:DataTypes.STRING,
        allowNull: false
      },
      st_quadro_cpo: { //Situação Quadro CPO x
        type:DataTypes.STRING,
        allowNull: false
      },
      cor_raca: { // x
        type:DataTypes.STRING,
        allowNull: false
      },
      especialidade: { //sgEspd
        type:DataTypes.STRING,
        allowNull: false
      },
      sexo: { //sgSexo
        type:DataTypes.STRING,
        allowNull: false
      },
      funcao_local_om: { //sgFncoLocal
        type:DataTypes.STRING,
        allowNull: false
      },
      
  });
  return PessoaFisica;
};