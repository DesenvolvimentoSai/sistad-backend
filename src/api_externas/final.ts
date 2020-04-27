var basicAuth = require('basic-auth');
const LdapAut2 = require('ldapauth-fork'); 

const ldapRetorno2 = new LdapAut2({
    //url: params.ldap_url,
    url: 'ldap://10.228.64.168:389',
    //url: 'ldap://172.16.38.168:389',
    searchBase: 'ou=contas,dc=fab,dc=intraer',
    searchFilter: '(uid={{username}})',
    reconnect: true
});

var rejectBasicAuth = function(res) {
  res.statusCode = 401;
  res.setHeader('WWW-Authenticate', 'Basic realm="Example"');
  res.end('Access denied');
}

var basicAuthMiddleware = function(req, res, next) {
  var credentials = basicAuth(req);
  if (!credentials) {
    return rejectBasicAuth(res);
  }
  var basicAuthMiddleware = function(req, res, next) {
    var credentials = basicAuth(req);
    if (!credentials) {
      return rejectBasicAuth(res);
    }
  
    ldapRetorno2.authenticate('04076228456', 'wff@260981N', function(err, user) {
      if (err) {
        return rejectBasicAuth(res);
      }
      req.user = user;
      next();
    });
  };
}