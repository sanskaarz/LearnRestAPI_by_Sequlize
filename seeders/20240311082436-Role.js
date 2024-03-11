'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Roles',
      [
        {
          id: 1,
          key: 'superadmin',
          title: 'Super Admin',
          createdAt: '2021-09-24 16:52:31.814+05:30',
          updatedAt: '2021-09-24 16:52:31.814+05:30',
        },
        {
          id: 2,
          key: 'admin',
          title: 'Admin',
          createdAt: '2021-09-24 16:52:31.814+05:30',
          updatedAt: '2021-09-24 16:52:31.814+05:30',
        },
        {
          id: 3,
          key: 'user',
          title: 'User',
          createdAt: '2021-09-24 16:52:31.814+05:30',
          updatedAt: '2021-09-24 16:52:31.814+05:30',
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
