const users = require('./users');


module.exports = (express) => {
  const usersRoutes = users(express);
  return { usersRoutes };
};
