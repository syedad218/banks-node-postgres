'use strict';
module.exports = (sequelize, DataTypes) => {
  const Bank = sequelize.define('Bank', {
    name: DataTypes.STRING,
    id: { type: DataTypes.BIGINT, allowNull: { args: false, msg: 'Please enter bank id' }, primaryKey: true }
  }, {
    timestamps: false,
    freezeTableName: true,
    tableName: 'banks'
  });
  Bank.associate = function(models) {
    // associations can be defined here
    Bank.hasMany( models.Branch, { foreignKey: 'bank_id' } )
  };
  return Bank; 
};