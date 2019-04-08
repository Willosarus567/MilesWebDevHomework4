'use strict';
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    name: DataTypes.STRING,
    date: DataTypes.DATE,
    location: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  Event.associate = function(models) {
    // associations can be defined here
  };
  return Event;
};