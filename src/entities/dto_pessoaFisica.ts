'use strict';
export default function (sequelize, DataTypes) {
  const PessoaFisica = sequelize.define('tb_pessoa_fisica', {
    id_pessoa_fisica: {
        type:DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
      },
      fk_id_foto: {
        type:DataTypes.BIGINT,
        allowNull: false
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
      fk_id_cfr: {
        type:DataTypes.BIGINT,
        allowNull: false
      },
      fk_id_turma: {
        type:DataTypes.BIGINT,
        allowNull: false
      },
      fk_id_login: {
        type:DataTypes.BIGINT,
        allowNull: false
      },
      nome_pessoa: {
        type: DataTypes.STRING(150),
        allowNull: false,
        validate: {
            notEmpty: true
        }
      },
      nome_guerra: {
        type: DataTypes.STRING(60),
        allowNull: false,
        validate: {
            notEmpty: true
        }
      },
      nr_ordem: {
        type: DataTypes.STRING(30),
        allowNull: false,
        validate: {
            notEmpty: true
        }
      },
      nr_cpf: {
        type: DataTypes.STRING(16),
        allowNull: false,
        validate: {
            notEmpty: true
        }
      },
      nr_ident_aer: {
        type:DataTypes.INTEGER,
        allowNull: false
      },
      dt_nascimento: {
        type:DataTypes.DATE,
        allowNull: false
      },
      nr_antiguidade: {
        type:DataTypes.INTEGER,
        allowNull: false
      },
      nr_antig_sigpes: {
        type:DataTypes.INTEGER,
        allowNull: false
      },
      vl_med_cfr: {
        type:DataTypes.DOUBLE(11, 2),
        allowNull: false,
        validate: {
            notEmpty: true
        }
      },
      
  });
  return PessoaFisica;
};