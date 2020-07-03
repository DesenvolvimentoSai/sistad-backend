import { ILogin, ILoginDetail, getConsultaMilitar } from './login-interface';
import SigpesProxyAxios from '../services/sigpesProxyAxios';
const model = require('../../entities');

class ServiceLogin implements ILogin{
    public retorno: any;

    constructor(){}

    getConsultaMilitar(value: string, callbeckRetornoConsultaMilitar){
        SigpesProxyAxios.getDataSigpes(value, this.retornoCallbeck, callbeckRetornoConsultaMilitar);
    }
    retornoCallbeck(data, statusCode, callbeckRetornoConsultaMilitar){
        if(statusCode === 200){
             // Foto
                //Incluindo / Atualizando informações da Foto do militar
                model.tb_foto.findOne({ where: {nr_ordem: data.nrOrdem} }).then(function(obj){            
                    (obj)?obj.update({ 
                            nr_ordem: data.nrOrdem,
                            foto: data.foto.imFoto
                        }) : model.tb_foto.create({
                            nr_ordem: data.nrOrdem,
                            foto: data.foto.imFoto
                        });  
                }); 
             // CARGO Funcao Relevante
                //Incluindo / Atualizando informações do CARGO do militar
                model.tb_cargo_funcao_relevante.findOne({ where: {sigla_cfr: 'nda'} }).then(function(obj){            
                    (obj)? obj.update({ 
                        sigla_cfr: 'nda',
                        descricao_cfr: 'Não consta dado'
                    }):model.tb_cargo_funcao_relevante.create({ 
                        sigla_cfr: 'nda',
                        descricao_cfr: 'Não consta dado'
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
            // POSTO
                //Incluindo / Atualizando informações do POSTO do militar
                model.tb_posto.findOne({ where: {dsc_posto: data.sgPosto} }).then(function(obj){            
                    (obj)? obj.update({ 
                        dsc_posto: data.sgPosto 
                    }):model.tb_posto.create({ 
                        dsc_posto: data.sgPosto 
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
            return callbeckRetornoConsultaMilitar(statusCode);
        
        //Como o erro retornado pelo Swagger do SIGPES é 500 para tudo, 
        //não temos como saber qual o motivo do erro.
        } else {
            // // Consulta a existência do militar na base local, pois o SIGPES tá fora do ar
            model.tb_pessoa_fisica.findOne({ where: {nr_cpf: data.nrCpf} }).then(function(obj){      
                // Respostas de informação (100-199),
                // Respostas de sucesso (200-299),
                // Redirecionamentos (300-399)
                // Erros do cliente (400-499)
                // Erros do servidor (500-599).
                // 201 Achei na base local || 400 Não achei na base local
                return (obj)?callbeckRetornoConsultaMilitar(201):callbeckRetornoConsultaMilitar(400)
            }); 
        }
    }
}

export default new ServiceLogin();