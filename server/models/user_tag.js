'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User_tag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User_tag.init({
    user_email: DataTypes.STRING,
    tag_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User_tag',
  });
  return User_tag;
};