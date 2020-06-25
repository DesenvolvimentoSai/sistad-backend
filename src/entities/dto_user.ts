import * as bcrypt from 'bcryptjs';

'use strict';
export default function (sequelize, DataTypes) {
    const User = sequelize.define('tb_user', {
        id_user: {
            type:DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    });
   User.beforeCreate((user) => {
        return hashPassword(user);
    });
    
    User.beforeUpdate((user) => {
        return hashPassword(user);
    });
    
    function hashPassword(user) {
        const salt = bcrypt.genSaltSync(10); //Roda por 10 vezes
        user.set('password', bcrypt.hashSync(user.password, salt));
    }
    return User;
}
