import { ILogin, ILoginDetail, getConsultaMilitar } from './login-interface';
import SigpesProxy from '../services/sigpesProxy';
import LdapValida from '../services/ldap';


class ServiceLogin implements ILogin{
    public retorno: any;

    constructor(){}

    getConsultaMilitar(value): boolean{
        console.log(`BODY::: ${JSON.stringify(value)}`)
        var cpf = value['cpf'];
        var saram = value['saram'];
        var senha = value['senha'];
        if(!senha){
            SigpesProxy.getDataSigpes(saram,cpf, function(err, result){
                var dados;
                dados = (err) ? err: result;
                console.log(`Dados de Retorno = ${dados}`);
            });
        }else {
            console.log('Validar senha:::');
            LdapValida.getConectLDAP(cpf,senha);
        }

        this.retorno = true;
        return this.retorno;
    };
}
export default new ServiceLogin();