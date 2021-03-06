'use strict';
const {
  Model
} = require('sequelize');
const { hashPass } = require('../helpers/bcryptjs');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    email: {
      type: DataTypes.STRING,
      unique : {
        args: true,
        msg: "Email is Already taken"
      },
      validate:{
        notEmpty:{
          args:true,
          msg: "Email is required"
        },
        isEmail: {
          args: true,
          msg: "Please check E-mail Format"
        }
      }
    },
    password: {
      type : DataTypes.STRING,
      validate:{
        notEmpty:{
          args: true,
          msg: "Password is required"
        }
      }
    },
  }, {
    sequelize,
    modelName: 'User',
    hooks: {
      beforeCreate: (user, option) => {
        user.password = hashPass(user.password)
      }
    }
  });
  return User;
};