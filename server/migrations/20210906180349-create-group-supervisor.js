'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('group_supervisors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      group_id: {
        type: Sequelize.INTEGER,
        references:{
          model: 'groups',
          key: 'id'
        }
      },
      supervisor_id: {
        type: Sequelize.INTEGER,
        references:{
          model: 'supervisors',
          key: 'id'
        }
      },
      deleted_at: {
        type: Sequelize.DATE
      },
      is_deleted: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('group_supervisors');
  }
};