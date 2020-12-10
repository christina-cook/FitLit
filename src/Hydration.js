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
    let targetDay;
    this.hydrationData.forEach(data => {
      if (data.date === date) {
        targetDay = this.hydrationData.indexOf(data);
      }
    });
    const week = this.hydrationData.filter((data, index) => {
      return (index <= targetDay && index >= (targetDay - 6));
    });
    return week.map(day => day.numOunces);
  }
}

if (typeof module !== 'undefined') {
  module.exports = Hydration;
}
