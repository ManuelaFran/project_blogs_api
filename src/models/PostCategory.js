module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    postId: {
      // primaryKey: true,
      type: DataTypes.INTEGER,
    },
    categoryId: {
      // primaryKey: true,
      type: DataTypes.INTEGER,
    },
  },
  {
    tableName: 'posts_categories',
    underscored: true,
    timestamps: false, 
  });

  PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      foreignKey:'post_id',
      otherKey: 'category_id',
      through: PostCategory,
    });

    models.Category.belongsToMany(models.BlogPost, {
      as: 'blogPost',
      foreignKey: 'category_id',
      otherKey: 'post_id',
      through: PostCategory,
    });
  };

  return PostCategory;
};