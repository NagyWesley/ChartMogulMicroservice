const CMSFactory = require('../ChartMogulServiceFactory');

class UsersService extends CMSFactory {
  async ping() {
    return this.ChartMogul.Ping.ping(this.config)
      .then(response => response)
      .catch(err => console.error(err));
  }
}

module.exports = UsersService;