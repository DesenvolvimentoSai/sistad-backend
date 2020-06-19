import LdapAut from 'ldapauth-fork';
import * as net from "net";
const { authenticate } = require('ldap-authentication');

class LdapValida {
  public ldapRetorno: LdapAut;
  private hostProxy = "172.16.31.111";
  private chave = 'Basic ' + Buffer.from('04076228456:wff@260981N').toString('base64');
constructor(){}

  getConectLDAP(cpf, senha){
    console.log(`Cheguei :: ${cpf} - ${senha}`);
    this.ldapRetorno = new LdapAut({
      //url: params.ldap_url,
      //url: 'ldap://172.16.31.111:389',
      url: 'ldap://172.16.38.168:389',
      searchBase: 'ou=contas,dc=fab,dc=intraer',
      searchFilter: '(uid={{username}})',
      reconnect: true,
      tlsOptions:{
        host:'04076228456:wff%40260981N@172.16.31.111:8080',
        // socket: net.Socket = {
        //   path:'teste',
        //   port: 8080
        // }
      }
    });
    this.ldapRetorno.once
    this.ldapRetorno.authenticate(cpf, senha, function(err, user) {
      console.log(`Usuário logado = ${user}`);
      this.closeConectLDAP();
      if (err) return err;
      return user;
    });
  }

  closeConectLDAP(){
    this.ldapRetorno.close();
  }
} export default new LdapValida();