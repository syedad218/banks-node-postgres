'use strict';
module.exports = (sequelize, DataTypes) => {
  const Branch = sequelize.define('Branch', {
    ifsc: {type: DataTypes.STRING, allowNull: { args: false, msg: 'Please enter ifsc for branch' }, primaryKey: true },
    bank_id: DataTypes.BIGINT,
    branch: DataTypes.STRING,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    district: DataTypes.STRING,
    state: DataTypes.STRING
  }, {
    timestamps: false,
    freezeTableName: true,
    tableName: 'branches'
  });
  Branch.associate = function(models) {
    // associations can be defined here
    Branch.belongsTo(models.Bank, { foreignKey: 'bank_id', onDelete: 'CASCADE'} )
  };
  return Branch;
};