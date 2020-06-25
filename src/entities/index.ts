'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const { dbURL, database, password, username } = require('../config/env');
var basename  = path.basename(module.filename);
const modelRelations = require('./relations/relations');
const db : any = {};

var opts = {
  define: {
      //prevent sequelize from pluralizing table names (Tirar o plural dos nosmes da tabelas e entidades)
      freezeTableName: true
  }
}

if (dbURL) {
  var sequelize = new Sequelize(dbURL,  opts);
} else {
  var sequelize = new Sequelize(database, username, password,  opts);
}
fs
  .readdirSync(__dirname)
  .filter(function(file) {
    let extension = '.js'
    if(process.env.NODE_ENV == 'development') extension = '.ts'
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) == `${extension}`);
  })
  .forEach(file => {
    const model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});
db.sequelize = sequelize;
modelRelations(db);
module.exports = db;
