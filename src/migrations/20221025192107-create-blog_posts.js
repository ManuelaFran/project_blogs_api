'use strict';

module.exports = {
  up: (queryInterface, Datatypes) => {
    return queryInterface.createTable('blog_posts', {
      id: { 
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Datatypes.INTEGER
      },
      title: {
        type: Datatypes.STRING,
      },
      content: {
        type: Datatypes.STRING,
      },
      user_id: {
        type: Datatypes.INTEGER,
        references: {
          model: 'users',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      published: {
        type: Datatypes.DATE,
      },
      updated: {
        type: Datatypes.DATE,
      },
    });
  },

  down: (queryInterface, _Datatypes) => {
    return queryInterface.dropTable('blog_posts');
  }
};
