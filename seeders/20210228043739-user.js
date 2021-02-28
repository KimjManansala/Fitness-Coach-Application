'use strict';

const { test } = require("../config/config");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      firstName: 'Test',
      lastName: 'Client',
      email: 'test@test.com',
      password: 'password',
      user_type: 'client',
      phone_number: '1231231234',
      user_weight: 70,
      user_height: 170,
      user_goal_weight: 65,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Test',
      lastName: 'Trainer',
      email: 'test@trainer.com',
      password: 'password',
      user_type: 'trainer',
      phone_number: '1231231234',
      user_weight: 70,
      user_height: 170,
      user_goal_weight: 65,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
