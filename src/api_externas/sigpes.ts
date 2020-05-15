// import 'rxjs';
// import 'rxjs/add/operator/map';
// import 'rxjs/Rx';
// import 'rxjs-compat';
// import { Observable } from 'rxjs';
// const http = require('http');
// import { map } from 'rxjs/operators';


require('rxjs/add/operator/map');
require('rxjs/Rx');
require('rxjs');
var map = require('rxjs/add/operator/map');
    
consultaSaram('04076228456');
function consultaSaram(cpf){
    var requestURL = 'http://api.ervicos.homolog.ccarj.intraer/sigpesApi/pessoaFisicas';
    map((res) => res.json());
    return http.get(`${requestURL}/${cpf}`)
    .pipe(map((res) => res.json()));
};
