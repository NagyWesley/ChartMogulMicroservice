const CMService = require('../ChartMogulService');

class UsersService extends CMService {
  async ping() {
    return this.ChartMogul.Ping.ping(this.config)
      .then(response => response)
      .catch(err => console.error(err));
  }

  async createUser(userData) {
    return this.ChartMogul.Customer
      .create(this.config, userData)
      .then(response => response)
      .catch(err => console.error(err));
  }

  async retrieveUser(uuid) {
    console.log(uuid);
    return this.ChartMogul.Customer
      .retrieve(this.config, uuid)
      .then((response) => {
        console.log(response);
        return response;
      })
      .catch(err => console.error(err));
  }
}

module.exports = UsersService;
