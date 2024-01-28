'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('user_accounts', [
      {
        name: 'Patman',
        surname: 'Chids',
        gender: 'Male',
        date_joined: '2005-12-01',
        email: 'patman.chids@gmail.com',
        password: 'P@manD33',
        profile_pic: 'patman.png',
        position: 'Managing Director',
        department: 'Executives',
        supervisor: 'Board of Directors',
        business_unit: 'Harare',
        group: 'Performance Group',
      },
      {
        name: 'Billy',
        surname: 'Gilmour',
        gender: 'Male',
        date_joined: '2008-10-01',
        email: 'billy.gilmour@gmail.com',
        password: 'Billy123',
        profile_pic: 'billy.png',
        position: 'Human Resources Director',
        department: 'Executives',
        supervisor: 'Board of Directors',
        business_unit: 'Harare',
        group: 'HR Group',
      },
      {
        name: 'Teemu',
        surname: 'Pukki',
        gender: 'Male',
        date_joined: '2002-01-01',
        email: 'teemu.pukki@gmail.com',
        password: 'Teemu123',
        profile_pic: 'teemu.png',
        position: 'Finance Director',
        department: 'Executives',
        supervisor: 'Board of Directors',
        business_unit: 'Harare',
        group: 'Finance Group',
      },
      {
        name: 'Lauren',
        surname: 'James',
        gender: 'Female',
        date_joined: '2000-09-01',
        email: 'lauren.james@gmail.com',
        password: 'Lauren123',
        profile_pic: 'lauren.png',
        position: 'IT Director',
        department: 'Executives',
        supervisor: 'Board of Directors',
        business_unit: 'Bulawayo',
        group: 'IT Group',
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('user_accounts', null, {});
  },
};
