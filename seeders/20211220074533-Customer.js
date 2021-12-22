'use strict';
var fs = require('fs')
var readline = require('readline')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   console.log('hello')

   let stream = fs.createReadStream('customer.csv')
   const rl = readline.createInterface({
     input: stream,
     crlfDelay: Infinity
   })
   let record_to_insert = []
   for await (const line of rl){
     let line_split_arr  = line.split(',')
     record_to_insert.push({name:line_split_arr[0],city:line_split_arr[1] , phone:line_split_arr[2], createdAt : new Date(), updatedAt : new Date()})
   }
   
   await queryInterface.bulkInsert('Customers', record_to_insert, {})


  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     const Op = Sequelize.Op
     
     return queryInterface.bulkDelete('Customers',{id:{[Op.in]:[3,4,5,6,7]}},{})

  }
};
