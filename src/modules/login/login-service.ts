import { ILogin, ILoginDetail, getConsultaMilitar } from './login-interface';
import SigpesProxy from '../services/sigpesProxy';
import LdapValida from '../services/ldap';


class ServiceLogin implements ILogin{
    public retorno: any;

    constructor(){}

    async getConsultaMilitar(value: string){
        let retorno = false;
        const lengthTotal = value.length;
        if(lengthTotal == 11) var valor = value;
        if(lengthTotal == 7) var valor = value;
        if(lengthTotal != 11 && lengthTotal != 7) var senha = value;
        
        let req = await SigpesProxy.getDataSigpes(valor);
        console.log(`RETORNO - ${JSON.stringify(req)}`);
        return true;
    };
}
export default new ServiceLogin();