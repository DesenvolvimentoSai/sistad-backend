import LdapAut from 'ldapauth-fork';

class LdapValida {
public ldapRetorno: LdapAut;
constructor(){}

  getConectLDAP(cpf, senha, retornoCallbeckValidarUser, callbeckRetornoValidarUser){
    this.ldapRetorno = new LdapAut({
      //url: params.ldap_url,
      url: 'ldap://10.228.64.168:389',
      //url: 'ldap://172.16.38.168:389',
      searchBase: 'ou=contas,dc=fab,dc=intraer',
      searchFilter: '(uid={{username}})',
      reconnect: true
    });
    // this.ldapRetorno = new LdapAut({
    //   //url: params.ldap_url,
    //   //url: 'ldap://172.16.31.111:389',
    //   url: 'ldap://172.16.38.168:389',
    //   searchBase: 'ou=contas,dc=fab,dc=intraer',
    //   searchFilter: '(uid={{username}})',
    //   reconnect: true,
    //   tlsOptions:{
    //     host:`04076228456:wff%40260981N@172.16.31.111:8080`,
    //     // socket: net.Socket = {//   path:'teste', //   port: 8080 // }
    //   }
    // });
    // this.ldapRetorno.once
    this.ldapRetorno.authenticate(cpf, senha, function(err, user) {
      if (err) {
        return retornoCallbeckValidarUser(err, callbeckRetornoValidarUser);
      } else { 
        return retornoCallbeckValidarUser(user, callbeckRetornoValidarUser); 
      }
    });
  }

  closeConectLDAP(){
    this.ldapRetorno.close();
  }
} export default new LdapValida();