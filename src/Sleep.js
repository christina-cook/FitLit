if (typeof require !== 'undefined') {
  helper = require('../src/helper')
  getAverage = helper.getAverage
  getTargetDay = helper.getTargetDay
  getTargetWeek = helper.getTargetWeek
}

class Sleep {
  constructor(sleepData) {
    this.sleepData = sleepData;
  }

  getAverageHrsSlept() {
    const average = getAverage(this.sleepData, 'hoursSlept');
    return Math.round(10 * average) / 10;
  }

  getAverageSleepQuality() {
    const average = getAverage(this.sleepData, 'sleepQuality');
    return Math.round(10 * average) / 10;
  }

  getDailyHrsSlept(date) {
    const day = getTargetDay(this.sleepData, date)
    return day.hoursSlept;
  }

  getDailySleepQuality(date) {
    const day = getTargetDay(this.sleepData, date)
    return day.sleepQuality;
  }

  getWeeklyHoursSlept(date) {
    const week = getTargetWeek(this.sleepData, date)

    return week.map(day => day.hoursSlept);
  }

  getWeeklySleepQuality(date) {
    const week = getTargetWeek(this.sleepData, date)

    return week.map(day => day.sleepQuality);
  }

  getWeeklyAverageSleepQuality(date) {
    const week = getTargetWeek(this.sleepData, date)

    const average = getAverage(week, 'sleepQuality');
    return Math.round(10 * average) / 10;
  }
}

if (typeof module !== 'undefined') {
  module.exports = Sleep;
}
