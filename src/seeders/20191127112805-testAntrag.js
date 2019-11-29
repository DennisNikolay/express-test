'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert('test_antrag', [
     {
       id: 1,
        erntejahr: 2019,
        betrieb_nr: '001141',
        createdAt: new Date('2017-01-01')
     },
     {
      id: 2,
      erntejahr: 2019,
      betrieb_nr: '123456',
      createdAt: new Date('2017-01-01')
    }
   ])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('test_antrag', {erntejahr: "2019"});
  }
};
