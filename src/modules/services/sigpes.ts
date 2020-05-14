import 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import 'rxjs-compat';
import { Observable } from 'rxjs';
const http = require('http');
import { map } from 'rxjs/operators';

class Sigpes{
    public  requestURL: string;        
    constructor(){
        this.requestURL = 'http://api.servicos.homolog.ccarj.intraer/sigpesApi/pessoaFisicas';
    }
    
    consultaSaram(saram: string){
        map((res: any) => res.json());
        return http.get(`${this.requestURL}/${saram}`)
        .pipe(map((res: any) => res.json()));
    };
}
export default new Sigpes();