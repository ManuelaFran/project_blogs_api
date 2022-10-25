module.exports = (sequelize, Datatypes) =>{
  const User = sequelize.define('User', {
    id: { 
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Datatypes.INTEGER,
    },
    displayName: Datatypes.STRING,
    email: Datatypes.STRING,
    password: Datatypes.STRING,
    image: Datatypes.STRING,
  }, 
  {
    tableName: 'users',
    underscored: true,
    timestamps: false, 
  });

  return User;
};