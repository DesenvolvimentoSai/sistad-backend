'use strict';
export default function (sequelize, DataTypes) {
  const LogAcoesSistema = sequelize.define('tb_log_acoes_sistema', {
    id_log_acoes_sistema: {
        type:DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    fk_id_pessoa: {
      type:DataTypes.BIGINT,
      allowNull: false
    },
    fk_id_perfil: {
      type:DataTypes.BIGINT,
      allowNull: false
    },
    acao: {
      type: DataTypes.STRING(500),
      allowNull: false,
      validate: {
          notEmpty: true
      }
    },
    dt_ultimo_acesso:  {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
          notEmpty: true
      }
    }
  });
  return LogAcoesSistema;
};