if (typeof require !== 'undefined') {
  helper = require('../src/helper')
  getAverage = helper.getAverage
  getTargetDay = helper.getTargetDay
  getTargetWeek = helper.getTargetWeek
}

class Hydration {
  constructor(hydrationData) {
    this.hydrationData = hydrationData;
  }

  getAverageOz() {
    const average = getAverage(this.hydrationData, 'numOunces');
    return Math.round(average);
  }

  getDailyOz(date) {
    const day = getTargetDay(this.hydrationData, date)
    return day.numOunces;
  }

  getWeeklyOz(date) {
    const week = getTargetWeek(this.hydrationData, date)
    return week.map(day => day.numOunces);
  }
}

if (typeof module !== 'undefined') {
  module.exports = Hydration;
}
