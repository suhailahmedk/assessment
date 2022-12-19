'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user.init({
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    isActive: DataTypes.INTEGER,
    is_varified: DataTypes.INTEGER,
    is_deleted: DataTypes.INTEGER,
    last_login: DataTypes.DATE,
    imgUrl: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    role_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'user',
  });
  user.associate=function(models){
    user.belongsTo(models.role,{foreignKey:"role_id"});
   user.belongsTo(models.user,{foreignKey:"id"});
 }
  return user;
};