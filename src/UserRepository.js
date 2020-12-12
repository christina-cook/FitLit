if (typeof require !== 'undefined') {
  User = require('../src/User');
}

class UserRepository {
  constructor(userData) {
    this.users = userData;
  }

  createUsers() {
    this.users = this.users.map(data => {
      return new User(data.id, data.name, data.address, data.email,
        data.strideLength, data.dailyStepGoal, data.friends);
    });
  }

  returnUser(id) {
    return this.users.find(user => user.id === id);
  }

  averageStepGoal() {
    const average = this.users.reduce((sum, user) => {
      return sum + user.dailyStepGoal
    }, 0) / this.users.length;
    return average;
  }

  fetchAllHydration(hydrationData) {
    this.users.forEach(user => user.fetchHydration(hydrationData));
  }

  fetchAllSleep(sleepData) {
    this.users.forEach(user => user.fetchSleep(sleepData));
  }

  getAllAvgSleepQuality() {
    let allAverages = this.users.map(user => {
      return user.sleep.getAverageSleepQuality();
    })
    allAverages = allAverages.reduce((sum, average) => {
      return sum + average;
    }, 0) / allAverages.length;
    return Math.round(10 * allAverages) / 10;
  }
}

if (typeof module !== 'undefined') {
  module.exports = UserRepository;
}
