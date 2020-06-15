const LdapAut = require('ldapauth-fork'); 

const ldapRetorno = new LdapAut({
    //url: params.ldap_url,
    url: 'ldap://10.228.64.168:389',
    //url: 'ldap://172.16.38.168:389',
    searchBase: 'ou=contas,dc=fab,dc=intraer',
    searchFilter: '(uid={{username}})',
    reconnect: true
});

const ret = false ;

function getLdap(callback){

    ldapRetorno.authenticate('04076228456', 'wff@260981N', function(err, user) {
    if (err) {
      callback(err);
    } else {
      callback(user); 
    }
  });
}
function callback(valor) {
  (JSON.stringify(valor.dn))?
    this.ret = true :
    this.ret = false ;
  fechar();
}

function fechar(){
  ldapRetorno.close();
}

getLdap(callback);
console.log(ret);



/**
 * JSON RETORNADO 
  {
  dn: 'uid=04076228456,ou=contas,dc=fab,dc=intraer',
  controls: [],
  objectClass: [
    'top',
    'inetOrgPerson',
    'shadowAccount',
    'person',
    'organizationalPerson',
    'FABconta'
  ],
  displayName: 'AP FERNANDO CPO',
  FABmail: 'TRUE',
  givenName: 'FERNANDO',
  FABmailrecover: 'fernandoathaide@hotmail.com',
  FABtermcompr: 'TRUE',
  FABpostograd: 'AP',
  FABvpnweb: 'FALSE',
  uid: '04076228456',
  cn: 'FERNANDO ATHAIDE NOBREGA FILHO',
  FABchat: 'TRUE',
  FABnrordem: '7273142',
  jpegPhoto: 'ND',
  FABcontaexpirada: 'FALSE',
  description: 'ND',
  FABom: 'CPO',
  mail: 'fernandofanf@fab.mil.br',
  FABzimbraUID: 'fernandofanf',
  FABomprest: 'CPO',
  FABproxyNivel: '1',
  sn: 'ATHAIDE NOBREGA FILHO',
  FABguerra: 'FERNANDO',
  FABstatus: 'TRUE',
  FABproxy: 'TRUE',
  FABtipopessoa: 'ma'
}
 */