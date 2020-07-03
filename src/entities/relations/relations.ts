const Relations = (model) => {
    //RELAÇÃO TB_QUADRO e TB_TURMA    
    model.tb_quadro.hasMany(model.tb_turma,{foreignKey: 'fk_id_quadro'});
    //model.tb_turma.belongsTo(model.tb_quadro, {foreignKey: 'id_quadro'});

    /*RELAÇÃO TB_PESSOA_FISICA ... 
        fk_id_foto
        fk_id_posto
        fk_id_quadro
        fk_id_om
        fk_id_cfr
        fk_id_perfil
        fk_id_turma
        fk_id_login
    */ // key, targetKey, foreignKey
    model.tb_foto.hasMany(model.tb_pessoa_fisica,{foreignKey: 'fk_id_foto'});
    //model.tb_pessoa_fisica.belongsTo(model.tb_foto, {key: 'id_foto'});
    
    model.tb_posto.hasMany(model.tb_pessoa_fisica,{foreignKey: 'fk_id_posto'});
    //model.tb_pessoa_fisica.belongsTo(model.tb_posto, {key: 'id_posto'});

    model.tb_quadro.hasMany(model.tb_pessoa_fisica,{foreignKey: 'fk_id_quadro'});
    //model.tb_pessoa_fisica.belongsTo(model.tb_quadro, {key: 'id_quadro'});

    model.tb_om.hasMany(model.tb_pessoa_fisica,{foreignKey: 'fk_id_om'});
    //model.tb_pessoa_fisica.belongsTo(model.tb_om, {key: 'id_om'});
    
    model.tb_cargo_funcao_relevante.hasMany(model.tb_pessoa_fisica,{foreignKey: 'fk_id_cfr'});
    //model.tb_pessoa_fisica.belongsTo(model.tb_cargo_funcao_relevante, {key: 'id_cfr'});
    
    model.tb_turma.hasMany(model.tb_pessoa_fisica,{foreignKey: 'fk_id_turma'});
    //model.tb_pessoa_fisica.belongsTo(model.tb_turma, {key: 'id_turma'});
    
    model.tb_login.hasMany(model.tb_pessoa_fisica,{foreignKey: 'fk_id_login'});
    //model.tb_pessoa_fisica.belongsTo(model.tb_login, {key: 'id_login'});

     /*RELAÇÃO tb_log_acoes_sistema
         fk_id_pessoa
         fk_id_perfil
     */
    model.tb_pessoa_fisica.hasMany(model.tb_log_acoes_sistema,{foreignKey: 'fk_id_pessoa'});
    //model.tb_log_acoes_sistema.belongsTo(model.tb_pessoa_fisica, {foreignKey: 'id_pessoa_fisica'});

    model.tb_perfil.hasMany(model.tb_log_acoes_sistema,{foreignKey: 'fk_id_perfil'});
    //model.tb_log_acoes_sistema.belongsTo(model.tb_perfil, {foreignKey: 'id_perfil'});


     /*RELAÇÃO ta_pessoa_fisica_has_tb_perfil
         fk_id_pessoa
         fk_id_perfil
     */
    model.tb_pessoa_fisica.hasMany(model.ta_pessoa_fisica_has_tb_perfil,{foreignKey: 'fk_id_pessoa'});
    //model.ta_pessoa_fisica_has_tb_perfil.belongsTo(model.tb_pessoa_fisica, {foreignKey: 'id_pessoa_fisica'});

    model.tb_perfil.hasMany(model.ta_pessoa_fisica_has_tb_perfil,{foreignKey: 'fk_id_perfil'});
    //model.ta_pessoa_fisica_has_tb_perfil.belongsTo(model.tb_perfil, {foreignKey: 'id_perfil'});



};
module.exports = Relations;