'use strict';


module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define('User', {
    userId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    userEmail: DataTypes.STRING,
    userPassword: Data.Types.STRING
  }, {
    tableName: 'user',
    timestamps: false,
    classMethods: {
      associate: function (models) {
        // associations can be defined here
      }
    }
  });

  return User;
};
