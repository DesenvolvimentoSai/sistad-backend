'use strict';
export default function (sequelize, DataTypes) {
  const PessoaFisicaHasPerfil = sequelize.define('ta_pessoa_fisica_has_tb_perfil', {
    fk_id_pessoa_fisica: {
      type:DataTypes.BIGINT,
      primaryKey: true,
      allowNull: false
    },
    fk_id_perfil: {
      type:DataTypes.BIGINT,
      primaryKey: true,
      allowNull: false
    }
  });
  return PessoaFisicaHasPerfil;
};