// import SimpleLDAP from 'simple-ldap-search';
 
const config = {
  url: 'ldap://10.228.64.168:389',
  base: 'ou=contas,dc=fab,dc=intraer',
  password: 'wff@260981N',
};
 
// create a new client
//const ldap = new SimpleLDAP(config);
 
// setup a filter and attributes for your LDAP query
const filter = '(uid=04076228456)';
const attributes = ['cn', 'description', 'mail', 'displayname', 'fabnrordem'];
 
// using async/await
// const users = Promise.resolve(ldap.search(filter, attributes));
// users.then(function(u) {
//     console.log("Show!");
//     console.log(u); // "Resolving"
// }, function(e) {
//     console.log("Erro: " + e);
// });