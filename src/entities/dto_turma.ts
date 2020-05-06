'use strict';
export default function (sequelize, DataTypes) {
  const Turma = sequelize.define('tb_turma', {
    id_turma: {
        type:DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    fk_id_quadro: {
      type:DataTypes.BIGINT,
      allowNull: false
    },
    no_turma: {
      type: DataTypes.STRING(150),
      allowNull: false,
      validate: {
          notEmpty: true
      }
    },
    dt_formacao_turma: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
          notEmpty: true
      }
    }
  });
  return Turma;
};