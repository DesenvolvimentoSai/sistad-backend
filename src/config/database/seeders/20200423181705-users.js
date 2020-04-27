'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  
  const { QueryTypes } = require('sequelize');
  const users = await queryInterface.sequelize.query('SELECT count(id_user) from "Users" WHERE name=\'Fernando\'', { type: QueryTypes.SELECT });
    if(users[0].count==0){
      queryInterface.bulkInsert('Users', 
      [
        {
          name: 'Fernando',
          email: 'test@medium.com',
          password: '9ff7b641722c30acdc058f2499d97dd8',
          // add createdAt, updatedAt
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ], {});
    } //else queryInterface.bulkDelete('Users', null, {});
  }
};