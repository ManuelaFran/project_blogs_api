'use strict';

module.exports = {
  up: (queryInterface, Datatypes) => {
    return queryInterface.createTable('posts_categories', {
      post_id: {
        allowNull: false,
        primaryKey: true,
        type: Datatypes.INTEGER,
        references: {
          model: 'blog_posts',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      category_id: {
        allowNull: false,
        primaryKey: true,
        type: Datatypes.INTEGER,
        references: {
          model: 'categories',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
    });
  },

  down: (queryInterface, _Datatypes) => {
    return queryInterface.dropTable('posts_categories');
  }
};
