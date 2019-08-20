'use strict';
module.exports = (sequelize, DataTypes) => {
  const Author = sequelize.define('author', {
    name: DataTypes.STRING
  }, {
    defaultScope: {
      attributes: { 
        exclude: ['createdAt','updatedAt'] 
      },
    }
  });
  Author.associate = function(models) {
    // associations can be defined here
    this.hasMany(models.book,{foreignKey : 'author_id'})
  };
  return Author;
};