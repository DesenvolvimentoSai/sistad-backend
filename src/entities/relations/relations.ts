const Relations = (model) => {
    //RELAÇÃO TB_QUADRO e TB_TURMA    
    model.tb_quadro.hasMany(model.tb_turma,{foreignKey: 'fk_id_quadro'});
    model.tb_turma.belongsTo(model.tb_quadro, {foreignKey: 'id_quadro'});

    /*RELAÇÃO TB_PESSOA_FISICA ... 
        fk_id_posto
        fk_id_quadro
        fk_id_om
        fk_id_cfr
        fk_id_perfil
        fk_id_turma
        fk_id_login
    */
    model.tb_posto.hasMany(model.tb_pessoa_fisica,{foreignKey: 'fk_id_posto'});
    model.tb_pessoa_fisica.belongsTo(model.tb_posto, {foreignKey: 'id_posto'});

    model.tb_quadro.hasMany(model.tb_pessoa_fisica,{foreignKey: 'fk_id_quadro'});
    model.tb_pessoa_fisica.belongsTo(model.tb_quadro, {foreignKey: 'id_quadro'});

    model.tb_om.hasMany(model.tb_pessoa_fisica,{foreignKey: 'fk_id_om'});
    model.tb_pessoa_fisica.belongsTo(model.tb_om, {foreignKey: 'id_om'});
    
    model.tb_cargo_funcao_relevante.hasMany(model.tb_pessoa_fisica,{foreignKey: 'fk_id_cfr'});
    model.tb_pessoa_fisica.belongsTo(model.tb_cargo_funcao_relevante, {foreignKey: 'id_cfr'});
    
    model.tb_perfil.hasMany(model.tb_pessoa_fisica,{foreignKey: 'fk_id_perfil'});
    model.tb_pessoa_fisica.belongsTo(model.tb_perfil, {foreignKey: 'id_perfil'});
    
    model.tb_turma.hasMany(model.tb_pessoa_fisica,{foreignKey: 'fk_id_turma'});
    model.tb_pessoa_fisica.belongsTo(model.tb_turma, {foreignKey: 'id_turma'});
    
    model.tb_login.hasMany(model.tb_pessoa_fisica,{foreignKey: 'fk_id_login'});
    model.tb_pessoa_fisica.belongsTo(model.tb_login, {foreignKey: 'id_login'});

     /*RELAÇÃO tb_log_acoes_sistema
         fk_id_pessoa
         fk_id_perfil
     */
    model.tb_pessoa_fisica.hasMany(model.tb_log_acoes_sistema,{foreignKey: 'fk_id_pessoa'});
    model.tb_log_acoes_sistema.belongsTo(model.tb_pessoa_fisica, {foreignKey: 'id_pessoa_fisica'});

    model.tb_perfil.hasMany(model.tb_log_acoes_sistema,{foreignKey: 'fk_id_perfil'});
    model.tb_log_acoes_sistema.belongsTo(model.tb_perfil, {foreignKey: 'id_perfil'});
};
module.exports = Relations;