class Hydration {
  constructor(hydrationData) {
    this.hydrationData = hydrationData;
  }

  getAverageOz() {
    const average = this.hydrationData.reduce((sum, data) => {
      return sum + data.numOunces;
    }, 0) / this.hydrationData.length;
    return Math.round(average);
  }

  getDailyOz(date) {
    const day = this.hydrationData.find(data => {
      return data.date === date;
    });
    return day.numOunces;
  }

  getWeeklyOz(date) {
    // find the date we're looking for
    // filter by 6 days before the date (7 total days)
    // map to get the number of ounces for each day
    // return that new map array
  }
}

if (typeof module !== 'undefined') {
  module.exports = Hydration;
}
