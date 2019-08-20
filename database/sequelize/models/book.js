'use strict';
module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('book', {
    title: DataTypes.STRING,
    author_id: DataTypes.INTEGER
  }, {
    defaultScope: {
      attributes: { 
        exclude: ['createdAt','updatedAt'] 
      },
    }
  });
  Book.associate = function(models) {
    this.belongsTo(models.author,{foreignKey: 'author_id'})
  };
  return Book;
};