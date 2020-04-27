'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  
    const { QueryTypes } = require('sequelize');
    const id = await queryInterface.sequelize.query(
        'SELECT count(id_nivel_acesso) from "tb_nivel_acessos" WHERE descricao=\'Administrador\'', 
        { type: QueryTypes.SELECT }
    );
    if(id[0].count==0){
      queryInterface.bulkInsert('tb_nivel_acessos', 
      [
        {
          descricao: 'Administrador',
          // add createdAt, updatedAt
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ])
    }
  },
  up: async (queryInterface, Sequelize) => {
  
    const { QueryTypes } = require('sequelize');
    const id = await queryInterface.sequelize.query(
        'SELECT count(id_nivel_acesso) from "tb_nivel_acessos" WHERE descricao=\'Comum\'', 
        { type: QueryTypes.SELECT }
    );
    console.log(id);
    if(id[0].count==0){
      await queryInterface.sequelize.query(
        'INSERT INTO "tb_nivel_acessos" (descricao, \"createdAt\", \"updatedAt\") VALUES (\'Comum\',now(),now())', 
        { type: QueryTypes.INSERT }
      );
    }
  }
};