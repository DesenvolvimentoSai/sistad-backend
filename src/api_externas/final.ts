var http = require('http');
var https = require('https');
//Dados para o Proxy CCA-BR
var user = '04076228456'; var senha = 'wff@260981N'; var host = '172.16.31.111'; var port = 8080;
var proxyUrl = "http://" + user + ":" + senha + "@" + host + ":" + port;
var cpfBusca = '04076228456';
const chave = 'Basic ' + Buffer.from(user + ':' + senha).toString('base64');

var url = new URL(`http://api.servicos.homolog.ccarj.intraer/sigpesApi/pessoa/militar/${cpfBusca}`);
//var url = new URL(`https://5ebc85d2ec34e90016191911.mockapi.io/sigpesApi/pessoafissica/${id}`);
//var url = new URL(`http://localhost:3000/pessoasfisicas/${id}`);

var options = {
    host: host,    // IP ou End do Prox
    port: 8080,    // Porta of proxy server
    path: url,     // URL de destino, add 443 port for https!
    headers: {
      'Proxy-Authorization': chave //Autenticação para o proxy na base64
    }
  };
  
var clientHttp=(url.protocol=="https:") ? https:http; // Verificação de qual protocolo estou usando

var res = clientHttp.get(options, (res) => { 
  res.setEncoding('utf8');
  res.on('data', (data) => { 
    var dataJson = JSON.parse(data);
    console.log(dataJson);
  });
});