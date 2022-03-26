"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Post);
      User.hasMany(models.Post_comment);
      User.hasMany(models.User_like);
      User.hasMany(models.User_view);
      User.hasMany(models.User_tag);
    }
  }
  User.init(
    {
      email: {
        type: DataTypes.STRING,
        primaryKey: true,
        comment: "고유 email",
      },
      name: DataTypes.STRING,
      image: DataTypes.STRING,
      provider: DataTypes.STRING,
      accesstoken: DataTypes.STRING,
      refreshtoken: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
