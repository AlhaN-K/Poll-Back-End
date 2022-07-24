module.exports = {
  database: {
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    host: process.env.DATABASE_HOST,
    databaseName: process.env.DATABASE_MAIN_DB,
  },
  jwt: {
    secret: process.env.JWT_SECRET,
    expirySeconds: process.env.JWT_EXPIRY_SECOND,
  },
};
