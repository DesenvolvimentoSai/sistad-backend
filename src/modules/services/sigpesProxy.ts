var http = require('http');
var https = require('https');

class SigpesProxy {
  private user = '12502320747';
  private senha = '444425631003Ju@'; 
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
  //(condição)?VERDADEIRO:FALSO;
  async getDataSigpes(valor:string){
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
    const req = await clientHttpOrHttps.get(this.opt, (res) => {
      console.log('statusCode:', res.statusCode);
      console.log('headers:', res.headers);
      res.on('data', (d) => {
         process.stdout.write(d);
      });
    });
        // req.on('error', (e) => {
        //   console.error(e);
        // });

    console.log(`RETORNO SERVCIÇO:  ${req}`);

    return req; 
  }
} 
export default new SigpesProxy();