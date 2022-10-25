'use strict';

module.exports = {
  up: (queryInterface, Datatypes) => {
    return queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Datatypes.INTEGER,
      },
      display_name: {
        allowNull: false,
        type: Datatypes.STRING,
      },
      email: {
        allowNull: false,
        type: Datatypes.STRING,
      },
      password: {
        allowNull: false,
        type: Datatypes.STRING,
      },
      image: {
        type: Datatypes.STRING,
      },
    });
     
  },

  down: (queryInterface, _Datatypes) => {
    return queryInterface.dropTable('users');
  }
};
