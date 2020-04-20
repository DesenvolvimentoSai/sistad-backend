const LdapAuth = require('ldapauth-fork'); 
//const params = require('./env_variables')


const ldapCon = new LdapAuth({
    url: 'ldap://10.228.64.168:389',
    //url: 'ldap://172.16.38.168:389',
    searchBase: 'ou=contas,dc=fab,dc=intraer',
    searchFilter: '(uid={{u}})',
    reconnect: true
});

const u = '04076228456';
const p = 'wff@260981N';
console.log(ldapCon.authenticate(u, p));








    

