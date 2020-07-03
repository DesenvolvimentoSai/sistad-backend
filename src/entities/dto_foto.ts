'use strict';
export default function (sequelize, DataTypes) {
  const Foto = sequelize.define('tb_foto', {
    id_foto: {
        type:DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
      },
    foto: {
        type:DataTypes.BLOB,
        allowNull: false
      },
    nr_ordem: {
      type: DataTypes.STRING(30),
      allowNull: false,
      validate: {
          notEmpty: true
      }
    }
  });
  return Foto;
};