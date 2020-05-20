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
//const httpTeste = require('http');
var Observable = require('rxjs');
var map = require('rxjs/add/operator/map');
    

function consultaSaram(cpf){
    var requestURL = 'http://api.ervicos.homolog.ccarj.intraer/sigpesApi/pessoaFisicas';
    map((res) => res.json());
    return http.get(`${requestURL}/${cpf}`)
    .pipe(map((res) => res.json()));
};

function buscarAnuncioPorIdCategoria(cpf) {
    return http.get(`http://api.ervicos.homolog.ccarj.intraer/sigpesApi/pessoaFisicas/${cpf}`)
      .map(res => res)
      .catch((error) => Observable.throw(error || 'Server error'));
  }

var t = buscarAnuncioPorIdCategoria('04076228456');
console.log(t);