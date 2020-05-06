const Relations = (model) => {    
    model.tb_quadro.hasMany(model.tb_turma,{foreignKey: 'fk_id_quadro'});
    model.tb_turma.belongsTo(model.tb_quadro, {foreignKey: 'id_quadro'});
};
module.exports = Relations;