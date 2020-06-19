var http = require('http');
var https = require('https');

class SigpesProxy {
  private user = '04076228456';
  private senha = 'wff@260981N'; 
  private hostProxy = '172.16.31.111';
  //private hostProxy = '172.16.38.168:389';
  private port = 8080;
  private chave = 'Basic ' + Buffer.from(this.user + ':' + this.senha).toString('base64');
  private opt: any; 
  private url: any;

  constructor(){}
  
  getDataSigpes(valor:string, retornoCallbeck, callbeckRetornoConsultaMilitar){
    var str = '';
    this.url = new URL(`http://api.servicos.homolog.ccarj.intraer/sigpesApi/pessoa/militar/${valor}`)
    var clientHttpOrHttps=(this.url.protocol=="https:") ? https:http; // Verificação de qual protocolo estou usando
    this.opt =  {
      host: this.hostProxy,    // IP ou End do Prox
      port: this.port,    // Porta of proxy server
      path: this.url,     // URL de destino, add 443 port for https!
      headers: {
        'Proxy-Authorization': this.chave, //Autenticação para o proxy na base64
        'Accept': 'application/json'
      }
    };
    clientHttpOrHttps.get(this.opt, (res) => {
      const { statusCode } = res;
      const contentType = res.headers['content-type'];
      console.log(`TEste =  ${res}`);
      let error;
      if (statusCode !== 200) {
        error = new Error('Request Failed.\n' + `Status Code: ${statusCode}`);
        //retornoCallbeck(error, statusCode, callbeckRetornoConsultaMilitar);
      } else if (statusCode == 200) {
        res.on('data', (data) => { 
          try {
            retornoCallbeck(data, statusCode, callbeckRetornoConsultaMilitar);
          } catch (e) {
            retornoCallbeck(e.message, statusCode, callbeckRetornoConsultaMilitar);
          }
        });
      };
    });
  }
} 
export default new SigpesProxy();