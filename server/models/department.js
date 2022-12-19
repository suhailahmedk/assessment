'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class department extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  department.init({
    department_name: DataTypes.STRING,
    is_deleted:DataTypes.INTEGER,
    deletedAt:DataTypes.DATE
  }, {
    sequelize,
    modelName: 'department',
  });
  department.associate=function(models){
    
    department.hasMany(models.user,{foreignKey:"department_id"})
  }
  return department;
};