const axios = require('axios');

class SigpesProxyAxios {
    constructor(){}
    getDataSigpes(valor:string, retornoCallbeck, callbeckRetornoConsultaMilitar){
        const url = new URL("http://api.servicos.homolog.ccarj.intraer/sigpesApi/pessoa/militar/");
        const config = { 
            proxy: { 
                host: '172.16.31.111',
                // host: 'ldap://172.16.38.168:389', 
                port: 8080, 
                auth: {
                    username: '04076228456', password: 'wff@260981N'
                }    
            }
        };
        axios.get(`${url}${valor}`, config)
          .then(response => {
            console.log(response.status);
            console.log(response.data);
            retornoCallbeck(response.data, response.status, callbeckRetornoConsultaMilitar);
          })
          .catch(error => {
            retornoCallbeck(error, error.status, callbeckRetornoConsultaMilitar);
          });
    }
} export default new SigpesProxyAxios();