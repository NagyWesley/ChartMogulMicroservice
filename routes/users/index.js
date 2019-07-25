const { UserService } = require('../../services');

module.exports = (express) => {
  const router = express.Router();
  router.get('/ping', async (req, res) => {
    const service = new UserService();
    res.send(await service.ping());
  });


  router.post('/add', async (req, res) => {
    const service = new UserService();
    const UserData = req.body;
    res.send(await service.createUser(UserData));
  });

  return router;
};
