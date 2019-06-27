module.exports = {
  development: {
    username: "cheenilabs",
    password: null,
    database: "bank_details",
    host: "127.0.0.1",
    dialect: "postgres",
    operatorsAliases: false
  },
  test: {
    username: "root",
    password: null,
    database: "bank_details_test",
    host: "127.0.0.1",
    dialect: "postgres",
    operatorsAliases: false
  },
  production: {
    username: process.env.username,
    password: process.env.password,
    database: process.env.database,
    host: "ec2-54-204-35-248.compute-1.amazonaws.com",
    dialect: "postgres",
    operatorsAliases: false
  }
};
