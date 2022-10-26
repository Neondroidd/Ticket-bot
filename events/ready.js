
const Event = require('../structures/Event');
const config = require('../config.json');

module.exports = class extends Event {
    async run() {

    // ready interval 

    
    const activities = [
      { name: `ItzSidhan`, type: 'WATCHING' }
    ];
  

    this.client.user.setPresence({ status: 'online', activity: activities[0] });
  }
}

