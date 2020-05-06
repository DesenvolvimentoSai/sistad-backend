'use strict';
export default function (sequelize, DataTypes) {
  const CargoFuncaoRelevante = sequelize.define('tb_cargo_funcao_relevante', {
    id_cfr: {
        type:DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
      },
    sigla_cfr: {
        type:   DataTypes.STRING(20),
        notNull: true,
        validate: {
            notEmpty: true
        }
      },
    descricao_cfr: {
        type:   DataTypes.STRING(100),
        notNull: true,
        validate: {
            notEmpty: true
        }
      },
  });
  return CargoFuncaoRelevante;
};