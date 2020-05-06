'use strict';
export default function (sequelize, DataTypes) {
  const Posto = sequelize.define('tb_posto', {
    id_posto: {
        type:DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
      },
    dsc_posto: {
      type: DataTypes.STRING(150),
      allowNull: false,
      validate: {
          notEmpty: true
      }
    }
  });
  return Posto;
};