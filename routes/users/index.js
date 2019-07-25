const ChartMogul = require('chartmogul-node');


module.exports = (express) => {
  const router = express.Router();
  router.get('/ping', (req, res) => {
    const config = new ChartMogul.Config(
      process.env.CHARTMOGUL_ACCOUNT_TOKEN,
      process.env.CHARTMOGUL_SECRET_KEY,
    );

    ChartMogul.Ping.ping(config)
      .then(response => res.send(response))
      .catch(err => console.error(err));
  });


  return router;
};
