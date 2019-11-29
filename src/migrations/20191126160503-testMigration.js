'use strict';

module.exports = {
  up: (queryInterface, sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
   return queryInterface.createTable('test_antrag', {
    id: {
      type: sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    erntejahr:{
      type: sequelize.STRING,
      allowNull: false
    },
    betrieb_nr:{
      type: sequelize.STRING,
      allowNull: false,
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

  down: (queryInterface) => {
    return queryInterface.dropTable('test_antrag');
  }
};
