'use strict';
export default function (sequelize, DataTypes) {
  const Quadro = sequelize.define('tb_quadro', {
    id_quadro: {
        type:DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
      },
    dsc_quadro: {
      type: DataTypes.STRING(150),
      allowNull: false,
      validate: {
          notEmpty: true
      }
    },
    // status: {
    //   type: DataTypes.STRING(30),
    //   allowNull: true
    // }
  });
  return Quadro;
};