if (typeof require !== 'undefined') {
  Hydration = require('../src/Hydration');
  Sleep = require('../src/Sleep');
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
    this.hydration;
    this.sleep;
    this.activity;
  }

  returnFirstName() {
    return this.name.split(' ')[0];
  }

  fetchHydration(hydrationData) {
    const sameId = hydrationData.filter(data => data.userID === this.id);

    this.hydration = new Hydration(sameId);
  }

  fetchSleep(sleepData) {
    const sameId = sleepData.filter(data => data.userID === this.id);

    this.sleep = new Sleep(sameId);
  }
}

if (typeof module !== 'undefined') {
  module.exports = User
}
