
import { Observable } from 'rxjs';
const http = require('http');
import { map } from 'rxjs/operators';


var requestURL = 'http://api.servicos.homolog.ccarj.intraer/sigpesApi/pessoaFisicas';
map((response: any) => response.json());

function obterPorId(id: number){
    return http.get(`${requestURL}/${id}`)
    .pipe(map(( res: Response) => res.json()));
};

const teste = obterPorId(4471598);
console.log(teste);