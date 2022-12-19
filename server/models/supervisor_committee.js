'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class supervisor_committee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  supervisor_committee.init({
    committee_id: DataTypes.INTEGER,
    supervisor_id: DataTypes.INTEGER,
    deleted_at: DataTypes.DATE,
    is_deleted: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'supervisor_committee',
  });
  return supervisor_committee;
};