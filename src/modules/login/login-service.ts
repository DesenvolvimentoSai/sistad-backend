import { ILogin, ILoginDetail, getConsultaCPF } from './login-interface';
import Sigpes from '../services/sigpes';
import SigpesProxy from '../services/sigpesProxy';

class ServiceLogin implements ILogin{
    public retorno: boolean;

    constructor(){}

    getConsultaCPF(saram: string): boolean{
        //var teste = Sigpes.consultaSaram('7273142');
        SigpesProxy.getConecSigpes(null,'7273142');
        this.retorno = true;
        return this.retorno;
    };
}
export default new ServiceLogin();