const { UserService } = require('../../services');

module.exports = (express) => {
  const router = express.Router();
  router.get('/ping', async (req, res) => {
    const service = new UserService();
    res.send(await service.ping());
  });

  return router;
};
