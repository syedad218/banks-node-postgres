'use strict';
module.exports = (sequelize, DataTypes) => {
  const BankBranch = sequelize.define('BankBranch', {
    ifsc: {type: DataTypes.STRING, allowNull: { args: false, msg: 'Please enter ifsc for branch' }, primaryKey: true },
    bank_id: DataTypes.BIGINT,
    branch: DataTypes.STRING,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    district: DataTypes.STRING,
    state: DataTypes.STRING,
    bank_name: DataTypes.STRING
  }, {
    timestamps: false,
    freezeTableName: true,
    tableName: 'bank_branches',
    treatAsView: true
  });
  BankBranch.associate = function(models) {
    // pass
  };
  return BankBranch;
};