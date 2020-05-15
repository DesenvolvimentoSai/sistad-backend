var http = require('http');
var https = require('https');
let retorno;


getSigpesCpfOrSaram('04076228456',null);
console.log(retorno);

function getSigpesCpfOrSaram(cpf, saram){
    var user = '04076228456'; var senha = 'wff@260981N'; var hostProxy = '172.16.31.111'; var port = 8080;
    var chave = 'Basic ' + Buffer.from(user + ':' + senha).toString('base64');
    var url = setUrl(cpf, saram);
    var opt = {
        host: hostProxy,    // IP ou End do Prox
        port: 8080,    // Porta of proxy server
        path: url,     // URL de destino, add 443 port for https!
        headers: {
        'Proxy-Authorization': chave //Autenticação para o proxy na base64
        }
    };
    var clientHttp=(url.protocol=="https:") ? https:http; // Verificação de qual protocolo estou usando

    var req = clientHttp.get(opt, (res) => { 
            res.setEncoding('utf8');
            res.on('data', (data) => { 
                console.log(JSON.parse(data));
                retorno =  data;
            });
        });    
        req.on('error', (e) => {
            retorno = e.message;
            console.log(`Houve um erro: ${e.message}`);
        });
}

function setUrl(cpf, saram){
    var parametro = (cpf) ? cpf : saram; 
    var urlCpf = new URL(`http://api.servicos.homolog.ccarj.intraer/sigpesApi/pessoa/militar/${parametro}`);
    var urlSaram = new URL(`http://api.servicos.homolog.ccarj.intraer/sigpesApi/pessoaFisicas/${parametro}`);
    var url = (cpf) ? urlCpf : urlSaram; 
    return url;
}

 
