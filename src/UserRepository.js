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
    const sortedUsers = this.users.sort((a, b) => {
      return b.sleep.getDailyHrsSlept(date) - a.sleep.getDailyHrsSlept(date);
    })
    const mostSleep = sortedUsers[0].sleep.getDailyHrsSlept(date);
    return sortedUsers.filter(user => {
      return user.sleep.getDailyHrsSlept(date) === mostSleep;
    })
  }

  fetchAllActivity(activityData) {
    this.users.forEach(user => user.fetchActivity(activityData));
  }

  getDailyAverageSteps(date) {
    const steps = [];

    this.users.forEach(user => steps.push(user.activity.getDailySteps(date)));

    const averageSteps = steps.reduce((sum, step) => {
      return sum + step;
    }, 0) / steps.length;
    return Math.round(averageSteps);
  }

  getDailyAverageFlights(date) {
    const flights = [];

    this.users.forEach(user => flights.push(user.activity.getDailyFlightsClimbed(date)));

    const averageFlights = flights.reduce((sum, flightCount) => {
      return sum + flightCount;
    }, 0) / flights.length;
    return Math.floor(averageFlights);
  }

  getDailyAverageMinutes(date) {
    const minutes = [];

    this.users.forEach(user => minutes.push(user.activity.getDailyMinutesActive(date)));

    const averageMinutes = minutes.reduce((sum, minutes) => {
      return sum + minutes;
    }, 0) / minutes.length;
    return Math.round(averageMinutes);
  }
}

if (typeof module !== 'undefined') {
  module.exports = UserRepository;
}
