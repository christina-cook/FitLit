if (typeof require !== 'undefined') {
  helper = require('../src/helper')
  getAverage = helper.getAverage
  getTargetDay = helper.getTargetDay
  getTargetWeek = helper.getTargetWeek
}

class Activity {
  constructor(activityData) {
    this.activityData = activityData;
  }

  getDailySteps(date) {
    const day = getTargetDay(this.activityData, date);
    return day.numSteps;
  }

  getDailyMinutesActive(date) {
    const day = getTargetDay(this.activityData, date);
    return day.minutesActive;
  }

  getDailyStairsClimbed(date) {
    const day = getTargetDay(this.activityData, date);
    return day.flightsOfStairs;
  }

  getWeeklyMinutesActive(date) {
    const week = getTargetWeek(this.activityData, date);
    return week.map(day => day.minutesActive);
  }

  getWeeklyAvgMinutesActive(date) {
    const week = getTargetWeek(this.activityData, date);
    return Math.round(getAverage(week, 'minutesActive'));
  }

  getWeeklyStepCount(date) {
    const week = getTargetWeek(this.activityData, date);
    return week.map(day => day.numSteps);
  }

  getWeeklyStairsClimbed(date) {
    const week = getTargetWeek(this.activityData, date);
    return week.map(day => day.flightsOfStairs);
  }

  getRecordNumberOfStairsClimbed() {
    const record = this.activityData.reduce((record, day) => {
      if (day.flightsOfStairs > record) {
        return day.flightsOfStairs;
      } else {
        return record;
      }
    }, 0);
    return record;
  }
}

if (typeof module !== 'undefined') {
  module.exports = Activity;
}
