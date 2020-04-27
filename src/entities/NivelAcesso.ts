'use strict';
module.exports = (sequelize, DataTypes) => {
  const NivelAcesso = sequelize.define('tb_nivel_acesso', {
    descricao: DataTypes.STRING
  }, {});
  NivelAcesso.associate = function(models) {
    // associations can be defined here
  };
  return NivelAcesso;
};