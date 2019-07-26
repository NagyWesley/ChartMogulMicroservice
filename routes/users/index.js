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

  router.get('/retrieve', async (req, res) => {
    const service = new UserService();
    const UserId = Number(req.query.userId);
    const uuid = (UserId === 1234) ? 'cus_eaa30dc2-025c-11e7-9b58-5b5a8ca7dc6a' : UserId;
    res.send(await service.retrieveUser(uuid));
  });
  return router;
};
