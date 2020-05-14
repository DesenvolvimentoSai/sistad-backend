var http = require('http');
var https = require('https');

class SigpesProxy {
  private user = '04076228456';
  private senha = 'wff@260981N'; 
  private hostProxy = '172.16.31.111';
  private port = 8080;
  private proxyUrl = "http://" + this.user + ":" + this.senha + "@" + this.hostProxy + ":" + this.port;
  private cpfBusca: string;
  private saramBusca: string;
  private chave = 'Basic ' + Buffer.from(this.user + ':' + this.senha).toString('base64');
  private opt: any; 
  private url: any;
  
  private retorno: any;

  constructor(){}

  getConecSigpes(saram?:string, cpf?:string){
    this.conecSigpes(saram, cpf);  
  }
  conecSigpes(saram?:string, cpf?:string){
    this.url = (cpf)? new URL(`http://api.servicos.homolog.ccarj.intraer/sigpesApi/pessoa/militar/${cpf}`) : new URL(`http://api.servicos.homolog.ccarj.intraer/sigpesApi/pessoaFisicas/${saram}`);
    var clientHttp=(this.url.protocol=="https:") ? https:http; // Verificação de qual protocolo estou usando
    this.opt =  {
      host: this.hostProxy,    // IP ou End do Prox
      port: this.port,    // Porta of proxy server
      path: this.url,     // URL de destino, add 443 port for https!
      headers: {
        'Proxy-Authorization': this.chave //Autenticação para o proxy na base64
      }
    };
    var req = clientHttp.get(this.opt, (res) => { 
      res.setEncoding('utf8');
      res.on('data', (data) => { 
        this.retorno = data;
      });
    });
  }  
} 
export default new SigpesProxy();