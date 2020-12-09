if (typeof require !== 'undefined') {
  var Hydration = require('../src/Hydration');
}

class User {
  constructor(id, name, address, email, strideLength,
    dailyStepGoal, friends) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.email = email;
    this.strideLength = strideLength;
    this.dailyStepGoal = dailyStepGoal;
    this.friends = friends;
  }

  returnFirstName() {
    return this.name.split(' ')[0];
  }

  fetchHydration(hydrationData) {
    const sameId = hydrationData.filter(data => data.userID === this.id);
    
    this.hydration = new Hydration(sameId);
  }
}

if (typeof module !== 'undefined') {
  module.exports = User
}
