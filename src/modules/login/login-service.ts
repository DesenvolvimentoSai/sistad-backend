import { ILogin, ILoginDetail, getConsultaMilitar } from './login-interface';
import SigpesProxyAxios from '../services/sigpesProxyAxios';
import LdapValida from '../services/ldap';

const model = require('../../entities');

class ServiceLogin implements ILogin{
    public retorno: any;
    constructor(){}

    getConsultaMilitar(value: string, callbeckRetornoConsultaMilitar){
        SigpesProxyAxios.getDataSigpes(value, this.retornoCallbeck, callbeckRetornoConsultaMilitar);
        
    }
    getConsultaMilitarLDAP(cpf: any, senha: any, callbeckRetornoValidarUser){
        LdapValida.getConectLDAP(cpf, senha, this.retornoCallbeckValidarUser, callbeckRetornoValidarUser);
    }
    retornoCallbeck(data, statusCode, callbeckRetornoConsultaMilitar){
        if(statusCode === 200 && data.nrOrdem){
            // POSTO
                //Incluindo / Atualizando informações do POSTO do militar
                model.tb_posto.findOne({ where: {dsc_posto: data.sgPosto} }).then(function(obj){            
                    (obj)? obj.update({ 
                        dsc_posto: data.sgPosto 
                    }):model.tb_posto.create({ 
                        dsc_posto: data.sgPosto 
                    });
                });
            // QUADRO
                //Incluindo / Atualizando informações do QUADRO do militar        
                model.tb_quadro.findOne({ where: {dsc_quadro: data.sgQdr} }).then(function(obj){            
                    (obj)? obj.update({ 
                        dsc_quadro: data.sgQdr 
                    }):model.tb_quadro.create({ 
                        dsc_quadro: data.sgQdr 
                    });
                });
            // OM
                //Incluindo / Atualizando informações da OM do militar
                model.tb_om.findOne({ where: {sg_om: data.sgOrg} }).then(function(obj){            
                    (obj)? obj.update({ 
                        nome_om: data.org.nmOrg,
                        sg_om: data.sgOrg,
                        status: (data.org.stExtinta = 'N')?'ativa':'extinta'
                    }):model.tb_om.create({
                        nome_om: data.org.nmOrg,
                        sg_om: data.sgOrg,
                        status: (data.org.stExtinta = 'N')?'ativa':'extinta'
                    });
                });
             // CARGO Funcao Relevante
                //Incluindo / Atualizando informações do CARGO do militar
                model.tb_cargo_funcao_relevante.findOne({ where: {sigla_cfr: 'nda'} }).then(function(obj){            
                    (obj)? obj.update({ 
                        sigla_cfr: 'nda',
                        descricao_cfr: 'Não consta cfr'
                    }):model.tb_cargo_funcao_relevante.create({ 
                        sigla_cfr: 'nda',
                        descricao_cfr: 'Não consta cfr'
                    });
                });

            // TURMA
                //Incluindo / Atualizando informações do TURMA do militar
                model.tb_turma.findOne({ 
                    where: {
                        no_turma: data.sgQdr,
                        dt_formacao_turma: new Date(data.dtConcFrm)
                    	} 
                    })
                    .then(function(retornoTurma){
                        (retornoTurma) ? retornoTurma.update({ 
                            no_turma: data.sgQdr,
                            dt_formacao_turma: new Date(data.dtConcFrm) 
                            }) : 
                            model.tb_quadro.findOne({ where: {dsc_quadro: data.sgQdr} })
                                .then(function(quadro){
                                    model.tb_turma.create({
                                        fk_id_quadro: quadro.id_quadro,
                                        no_turma: quadro.dsc_quadro,
                                        dt_formacao_turma: new Date(data.dtConcFrm) 
                                    });
                            })            
                    });

            //PESSOA FÍSICA
            model.tb_pessoa_fisica.findOne({ where: {nome_pessoa: data.nmPessoa}})
            .then(function(pessoa){
                model.tb_posto.findOne({ where: {dsc_posto: data.sgPosto}})
                .then(function(posto){
                    model.tb_quadro.findOne({ where: {dsc_quadro: data.sgQdr}})
                    .then(function(quadro){
                        model.tb_om.findOne({ where: {sg_om: data.sgOrg}})
                        .then(function(om){
                            model.tb_cargo_funcao_relevante.findOne({ where: {sigla_cfr: 'nda'}})
                            .then(function(cfr){
                                model.tb_turma.findOne({ where: {no_turma: data.sgQdr,dt_formacao_turma: new Date(data.dtConcFrm)}})    
                                .then(function(turma){
                                   (pessoa)?
                                        pessoa.update({ 
                                            fk_id_posto: posto.id_posto,
                                            fk_id_quadro: quadro.id_quadro,
                                            fk_id_om: om.id_om,
                                            fk_id_cfr: cfr.id_cfr,
                                            fk_id_turma: turma.id_turma,
                                            nome_pessoa:data.nmPessoa,
                                            nome_guerra:data.nmGuerra,
                                            nr_ordem:data.nrOrdem,
                                            nr_cpf:data.nrCpf,
                                            nr_ident_aer:data.nrIdentAer,
                                            dt_nascimento:new Date(data.dtNasc),
                                            nr_antiguidade:null,
                                            nr_antig_sigpes:data.nrAntig,
                                            vl_med_cfr:null,
                                            foto:data.foto.imFoto,
                                            dt_praca:new Date(data.dtPraca),
                                            dt_praca_ultima:new Date(data.dtConcFrm),//Ñ sei
                                            dt_formacao_sigpes:new Date(data.dtConcFrm),
                                            st_militar:data.pesfisType,
                                            dt_ultima_promocao:new Date(data.dtPromocaoAtual),
                                            tx_tempo_servico:data.txTempoServico,
                                            st_quadro_sigpes:data.pesfisType,//Ñ sei
                                            st_quadro_cpo:data.pesfisType,//Ñ sei
                                            cor_raca:'nda',
                                            especialidade:data.sgEspd,
                                            sexo:data.sgSexo,
                                            funcao_local_om:data.sgFncoLocal                                            
                                        })
                                    :
                                        model.tb_pessoa_fisica.create({ 
                                            fk_id_posto: posto.id_posto,
                                            fk_id_quadro: quadro.id_quadro,
                                            fk_id_om: om.id_om,
                                            fk_id_cfr: cfr.id_cfr,
                                            fk_id_turma: turma.id_turma,
                                            nome_pessoa:data.nmPessoa,
                                            nome_guerra:data.nmGuerra,
                                            nr_ordem:data.nrOrdem,
                                            nr_cpf:data.nrCpf,
                                            nr_ident_aer:data.nrIdentAer,
                                            dt_nascimento:new Date(data.dtNasc),
                                            nr_antiguidade:null,
                                            nr_antig_sigpes:data.nrAntig,
                                            vl_med_cfr:null,
                                            foto:data.foto.imFoto,
                                            dt_praca:new Date(data.dtPraca),
                                            dt_praca_ultima:new Date(data.dtConcFrm),//Ñ sei,
                                            dt_formacao_sigpes:new Date(data.dtConcFrm),
                                            st_militar:data.pesfisType,
                                            dt_ultima_promocao:new Date(data.dtPromocaoAtual),
                                            tx_tempo_servico:data.txTempoServico,
                                            st_quadro_sigpes:data.pesfisType,//Ñ sei
                                            st_quadro_cpo:data.pesfisType,//Ñ sei
                                            cor_raca:'nda',
                                            especialidade:data.sgEspd,
                                            sexo:data.sgSexo,
                                            funcao_local_om:data.sgFncoLocal 
                                        })
                                });
                            }); 
                        });
                    });   
                });
            });            


             
            return callbeckRetornoConsultaMilitar(statusCode);
        
        //Como o erro retornado pelo Swagger do SIGPES é 500 para tudo, 
        //não temos como saber qual o motivo do erro.
        } else {
            ////Consulta a existência do militar na base local, pois o SIGPES tá fora do ar
            model.tb_pessoa_fisica.findOne({ where: {nr_cpf: data.valor} }).then(function(obj){      
                // Respostas de informação (100-199),
                // Respostas de sucesso (200-299),
                // Redirecionamentos (300-399)
                // Erros do cliente (400-499)
                // Erros do servidor (500-599).
                // 201 Achei na base local || 401 Não achei na base local
                return (!obj)?callbeckRetornoConsultaMilitar(201):callbeckRetornoConsultaMilitar(401)
            }); 
        }
    }
    retornoCallbeckValidarUser(userData, callbeckRetornoValidarUser){
        if(userData.dn) { //true
        
        
        }else{//false
            LdapValida.closeConectLDAP();
            callbeckRetornoValidarUser(userData.lde_message);
        }
    }
}

export default new ServiceLogin();