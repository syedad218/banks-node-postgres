'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('branches', {
      ifsc: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      bank_id: {
        type: Sequelize.BIGINT
      },
      branch: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      district: {
        type: Sequelize.STRING
      },
      state: {
        type: Sequelize.STRING
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('branches');
  }
};