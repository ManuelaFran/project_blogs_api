module.exports = (sequelize, Datatypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    id: { 
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Datatypes.INTEGER
    },
    title: Datatypes.STRING,
    content: Datatypes.STRING,
    userId: Datatypes.INTEGER,
    published: {
      type: Datatypes.DATE,
      defaultValue: Datatypes.NOW
    },
    updated: {
      type: Datatypes.DATE,
      defaultValue: Datatypes.NOW
    },
  },
  {
    tableName: 'blog_posts',
    underscored: true,
    timestamps: false,
  });

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, {
      foreignKey: 'user_id',
      as: 'user',
    });
  };

  return BlogPost;
};