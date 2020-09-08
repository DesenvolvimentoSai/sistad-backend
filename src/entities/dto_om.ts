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
    },
    sg_om: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    sessao: {
      type: DataTypes.STRING(30),
      defaultValue: 'nda',
      allowNull: true
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