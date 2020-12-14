if (typeof require !== 'undefined') {
  User = require('../src/User');
  helper = require('../src/helper')
  getAverage = helper.getAverage
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

  getGoodSleepers(date) {
    return this.users.filter(user => {
      return user.sleep.getWeeklyAverageSleepQuality(date) >= 3;
    })
  }

  findHighestSleepUser(date) {
    // sort sleep hours from greatest to least to find highest value
    // filter all the users with the highest value
    const sortedUsers = this.users.sort((a, b) => {
      return b.sleep.getDailyHrsSlept(date) - a.sleep.getDailyHrsSlept(date);
    })
    const mostSleep = sortedUsers[0].sleep.getDailyHrsSlept(date);
    return sortedUsers.filter(user => {
      return user.sleep.getDailyHrsSlept(date) === mostSleep;
    })
  }
}

if (typeof module !== 'undefined') {
  module.exports = UserRepository;
}
