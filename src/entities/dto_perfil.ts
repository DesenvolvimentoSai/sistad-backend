
'use strict';
export default function (sequelize, DataTypes) {
  const Perfil = sequelize.define('tb_perfil', {
    id_perfil: {
        type:DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
      },
    tipos: {
        type:   DataTypes.ENUM,
        values: ['ativa', 'reserva', 'graduado', 'oficial', 'deleted'],
        defaultValue: 'ativa',
        notNull: true,
      },
    descricao: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
          notEmpty: true
      }
    }
  });
  return Perfil;
};