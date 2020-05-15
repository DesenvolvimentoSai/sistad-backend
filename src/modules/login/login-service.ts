import { ILogin, ILoginDetail, getConsultaCPF } from './login-interface';
import Sigpes from '../services/sigpes';
import SigpesProxy from '../services/sigpesProxy';

class ServiceLogin implements ILogin{
    public retorno: any;

    constructor(){}

    getConsultaCPF(saram: string): boolean{
        //var teste = Sigpes.consultaSaram('7273142');
        //console.log(`SARAM = ${saram}`);
        // this.retorno = SigpesProxy.getConecSigpes(saram,null);
        this.retorno = Sigpes.consultaSaram2('7273142');
        console.log(`DadoRetorno = ${this.retorno}`);
        this.retorno = true;
        return this.retorno;
    };
}
export default new ServiceLogin();