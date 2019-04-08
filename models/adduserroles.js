'use strict';
module.exports = (sequelize, DataTypes) => {
  const addUserRoles = sequelize.define('adduserroles', {
    role: DataTypes.STRING
  
  
  });
  
  addUserRoles.associate = function(models) {
    // associations can be defined here
  };
  return addUserRoles;
};