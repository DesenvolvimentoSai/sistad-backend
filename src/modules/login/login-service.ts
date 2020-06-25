import { ILogin, ILoginDetail, getConsultaMilitar } from './login-interface';
import SigpesProxyAxios from '../services/sigpesProxyAxios';
import { IOM } from '../../entities/interfaces/om-interface';
const { OM, User } = require('../../entities');
const model = require('../../entities');

class ServiceLogin implements ILogin{
    public retorno: any;

    constructor(){}

    getConsultaMilitar(value: string, callbeckRetornoConsultaMilitar){
        SigpesProxyAxios.getDataSigpes(value, this.retornoCallbeck, callbeckRetornoConsultaMilitar);
    }
    retornoCallbeck(data, statusCode, callbeckRetornoConsultaMilitar){
        if(statusCode === 200){
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
        } else {
            return callbeckRetornoConsultaMilitar(statusCode);
        }
    }
}

export default new ServiceLogin();