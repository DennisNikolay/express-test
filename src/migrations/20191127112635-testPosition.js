'use strict';

module.exports = {
  up: (queryInterface, sequelize) => {
    return queryInterface.createTable('test_position', {
      id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      antrag_id:{
        type: sequelize.INTEGER,
        allowNull: false
      },
      createdAt: {
        type: sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: sequelize.DATE
      },
     });
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
   return queryInterface.dropTable('test_position');
  }
};
