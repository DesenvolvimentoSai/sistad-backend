'use strict';
export default function (sequelize, DataTypes) {
  const OM = sequelize.define('tb_om', {
    id_om: {
        type:DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    nome_om: {
      type: DataTypes.STRING(150),
      allowNull: false,
      validate: {
          notEmpty: true
      }
    },
    sg_om: {
      type: DataTypes.STRING(30),
      allowNull: false,
      validate: {
          notEmpty: true
      }
    },
    status: {
        type: DataTypes.ENUM,
        values: ['ativa', 'extinta'],
        defaultValue: 'ativa',
        notNull: true,
      }
  });
  return OM;
};