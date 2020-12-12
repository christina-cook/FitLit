class Sleep {
  constructor(sleepData) {
    this.sleepData = sleepData;
  }

  getAverageHrsSlept() {
    const average = this.sleepData.reduce((sum, data) => {
      return sum + data.hoursSlept;
    }, 0) / this.sleepData.length;
    return Math.round(10 * average) / 10;
  }

  getAverageSleepQuality() {
    const average = this.sleepData.reduce((sum, data) => {
      return sum + data.sleepQuality;
    }, 0) / this.sleepData.length;
    return Math.round(10 * average) / 10;
  }

  getDailyHrsSlept(date) {
    const day = this.sleepData.find(data => {
      return data.date === date;
    });
    return day.hoursSlept;
  }

  getDailySleepQuality(date) {
    const day = this.sleepData.find(data => {
      return data.date === date;
    });
    return day.sleepQuality;
  }

  getWeeklyHoursSlept(date) {
    let targetDay;
    this.sleepData.forEach(data => {
      if (data.date === date) {
        targetDay = this.sleepData.indexOf(data);
      }
    });
    const week = this.sleepData.filter((data, index) => {
      return (index <= targetDay && index >= (targetDay - 6));
    });

    return week.map(day => day.hoursSlept);
  }

  getWeeklySleepQuality(date) {
    let targetDay;
    this.sleepData.forEach(data => {
      if (data.date === date) {
        targetDay = this.sleepData.indexOf(data);
      }
    });
    const week = this.sleepData.filter((data, index) => {
      return (index <= targetDay && index >= (targetDay - 6));
    });

    return week.map(day => day.sleepQuality);
  }

  getWeeklyAverageSleepQuality(date) {
    let targetDay;
    this.sleepData.forEach(data => {
      if (data.date === date) {
        targetDay = this.sleepData.indexOf(data);
      }
    });
    const week = this.sleepData.filter((data, index) => {
      return (index <= targetDay && index >= (targetDay - 6));
    });

    const average = week.reduce((sum, data) => {
      return sum + data.sleepQuality;
    }, 0) / week.length;

    return Math.round(10 * average) / 10;
  }
}

if (typeof module !== 'undefined') {
  module.exports = Sleep;
}
