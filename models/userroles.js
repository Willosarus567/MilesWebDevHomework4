'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserRoles = sequelize.define('UserRoles', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    role: DataTypes.STRING
  }); 
      UserRoles.associate = function(models) {
        /*return sequelize.queryInterface.removeColumn('Users', 'UserRoleId');*/  
    }
  return UserRoles;
};