'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Statuses',
      [
        {
          id: 1,
          key: 'pending',
          title: 'Pending',
          createdAt: '2023-11-22 01:03:10.843-08',
          updatedAt: '2023-11-22 01:03:10.843-08',
        },
        {
          id: 2,
          key: 'success',
          title: 'Success',
          createdAt: '2023-11-22 01:03:10.843-08',
          updatedAt: '2023-11-22 01:03:10.843-08',
        },
        {
          id: 3,
          key: 'approved',
          title: 'Approved',
          createdAt: '2023-11-22 01:03:10.843-08',
          updatedAt: '2023-11-22 01:03:10.843-08',
        },
        {
          id: 4,
          key: 'rejected',
          title: 'Rejected',
          createdAt: '2023-11-22 01:03:10.843-08',
          updatedAt: '2023-11-22 01:03:10.843-08',
        },
        {
          id: 5,
          key: 'blocked',
          title: 'Blocked',
          createdAt: '2023-11-22 01:03:10.843-08',
          updatedAt: '2023-11-22 01:03:10.843-08',
        },
        {
          id: 6,
          key: 'active',
          title: 'Active',
          createdAt: '2023-11-22 01:03:10.843-08',
          updatedAt: '2023-11-22 01:03:10.843-08',
        },
        {
          id: 7,
          key: 'inactive',
          title: 'Inactive',
          createdAt: '2023-11-22 01:03:10.843-08',
          updatedAt: '2023-11-22 01:03:10.843-08',
        },
        {
          id: 8,
          key: 'ongoing',
          title: 'Ongoing',
          createdAt: '2023-11-22 01:03:10.843-08',
          updatedAt: '2023-11-22 01:03:10.843-08',
        },
        {
          id: 9,
          key: 'completed',
          title: 'Completed',
          createdAt: '2023-11-22 01:03:10.843-08',
          updatedAt: '2023-11-22 01:03:10.843-08',
        },
        {
          id: 10,
          key: 'cancelled',
          title: 'Cancelled',
          createdAt: '2023-11-22 01:03:10.843-08',
          updatedAt: '2023-11-22 01:03:10.843-08',
        },

      ],
      {}
    );
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
