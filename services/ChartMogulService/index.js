const ChartMogul = require('chartmogul-node');

class ChartMogulService {
  constructor() {
    this.config = new ChartMogul.Config(
      process.env.CHARTMOGUL_ACCOUNT_TOKEN,
      process.env.CHARTMOGUL_SECRET_KEY,
    );

    this.ChartMogul = ChartMogul;
  }
}


module.exports = ChartMogulService;
