import { Observable } from 'rxjs';
const http = require('http');
import { map } from 'rxjs/operators';
const fetch = require('node-fetch');


class Sigpes{        
    constructor(){}
    
    consultaSaram(saram: string){
        var requestURL = 'http://api.servicos.homolog.ccarj.intraer/sigpesApi/pessoaFisicas';
        map((res: any) => res.json());
        return http.get(`${requestURL}/${saram}`)
    .pipe(map(( res: Response) => res.json()));
    };

    consultaSaram2(parametro) {
        return fetch(`http://api.servicos.homolog.ccarj.intraer/sigpesApi/pessoaFisicas/${parametro}`)
            .then(response => response.json())
            .then(data => (data))
            .catch(console.error);
    }
}
export default new Sigpes();