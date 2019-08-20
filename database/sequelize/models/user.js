'use strict';
module.exports = function(sequelize, DataTypes) {
  let randomString = require('md5');
  var user = sequelize.define('user', {
    email:{
      type: DataTypes.STRING,
      allowNull: false
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: { 
      type: DataTypes.STRING,
      defaultValue: randomString('123'),
      set(val) {
        this.setDataValue('password', randomString(val));
      }
    },
  },{
    defaultScope: {
      attributes: { 
        exclude: ['password','createdAt','updatedAt'] 
      },
    }
  });
  return user;
};