if (typeof require !== 'undefined') {
  Hydration = require('../src/Hydration');
  Sleep = require('../src/Sleep');
  Activity = require('../src/Activity');
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

  fetchActivity(activityData) {
    const sameId = activityData.filter(data => data.userID === this.id);

    this.activity = new Activity(sameId);
  }

  getDailyMilesWalked(date) {
    const stepsToMile = 5280 / this.strideLength;
    const milesWalked = this.activity.getDailySteps(date) / stepsToMile;
    return Math.round(10 * milesWalked) / 10;
  }

  isGoalReached(date) {
    return this.activity.getDailySteps(date) >= this.dailyStepGoal;
  }

  getAllDaysGoalReached() {
    const daysGoalReached = this.activity.activityData.filter(day => {
      return this.isGoalReached(day.date);
    })
    return daysGoalReached;
  }
}

if (typeof module !== 'undefined') {
  module.exports = User
}
