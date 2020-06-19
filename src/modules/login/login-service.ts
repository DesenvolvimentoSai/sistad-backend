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
        
        // Update no banco local;
        // sgOrg: Sigla
        // org.nmOrg: Descrição da OM
        // stExtinta: N ou S Extinta
        // console.log
        upsert({nome_om: data.org.nmOrg},{sg_om: data.sgOrg},{status: data.org.stExtinta}).then(function(result){
            callbeckRetornoConsultaMilitar(statusCode);
        });
           
        function upsert(nome_om, sg_om, status) {

            return model.OM
                .findOne({ where: sg_om })
                .then(function(obj) {
                    // update
                    (status == 'N')?status = 'ativa': status = 'extinta';
                    if(obj)
                        return obj.update(nome_om, sg_om, status);
                    // insert
                    return model.OM.create(nome_om, sg_om, status);
                })
        }
    }
}
export default new ServiceLogin();