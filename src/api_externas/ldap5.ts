const LdapAut = require('ldapauth-fork'); 

const ldapRetorno = new LdapAut({
    //url: params.ldap_url,
    url: 'ldap://10.228.64.168:389',
    //url: 'ldap://172.16.38.168:389',
    searchBase: 'ou=contas,dc=fab,dc=intraer',
    reconnect: true
});

ldapRetorno.authenticate('04076228456', 'wff@260981N', function(err, user) {
    if (err) {
      console.log('Erro: ' + err);
    }
    console.log(user);
  });

  function fazer(){
      
  }


   

