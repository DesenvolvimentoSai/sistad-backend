const axios = require('axios');
axios.defaults.timeout = 1000 * 5;

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
            },
            timeout: 1000 * 5, // 5 Segundos
        };
        axios.get(`${url}${valor}`, config, { timeout: 1000 * 5 })
          .then(response => {
            if(response.data){
              axios.get(`http://api.servicos.homolog.ccarj.intraer/sigpesApi/fotoes/${response.data.nrOrdem}`, config)
                .then(foto => {
                  response.data.foto = foto.data;
                  retornoCallbeck(response.data, response.status, callbeckRetornoConsultaMilitar);
                })
                .catch(error => {
                  error.valor = valor;
                  retornoCallbeck(error, error.status, callbeckRetornoConsultaMilitar);
                });
            }else{
              response.valor = valor;
              retornoCallbeck(response, response.status, callbeckRetornoConsultaMilitar);  
            }
          })
          .catch(error => {
            error.valor = valor;
            //Todos os erros do SIGPES estão vindo com o valor 500 
            retornoCallbeck(error, error.status, callbeckRetornoConsultaMilitar);
          });
    }
} export default new SigpesProxyAxios();