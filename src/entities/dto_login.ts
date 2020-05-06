import * as bcrypt from 'bcrypt';

'use strict';
export default function (sequelize, DataTypes) {
  const Login = sequelize.define('tb_login', {
    id_login: {
      type:DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },
    cpf: {
      type: DataTypes.STRING(11),
      /* Postgresql não aceita zeros a esquerda
      type: Sequelize.BIGINT(11).ZEROFILL.UNSIGNED
      */
      allowNull: false,
      validate: {
          notEmpty: true
      }
    },
    senhacript: {
      type: DataTypes.STRING(256),
      allowNull: false,
      validate: {
          notEmpty: true
      }
    },
    token: {
      type: DataTypes.STRING(256),
      allowNull: false,
      validate: {
          notEmpty: true
      }
    }
  });
  
 //GERADOR DE SENHAS CRIPTOGRAFADAS
    Login.beforeCreate((login) => {
      return hashPassword(login);
    });
    
    Login.beforeUpdate((login) => {
      return hashPassword(login);
    });
    
    function hashPassword(login) {
      const salt = bcrypt.genSaltSync(10); //Roda por 10 vezes
      login.set('password', bcrypt.hashSync(login.senhacript, salt));
    } 

  return Login;
}