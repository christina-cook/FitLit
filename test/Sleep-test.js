const chai = require('chai');
const expect = chai.expect;
const Sleep = require('../src/Sleep');

describe('Sleep', () => {
  let sleepData, sleep;

  beforeEach(() => {
    sleepData = [{
      "userID": 1,
      "date": "2019/06/15",
      "hoursSlept": 6.1,
      "sleepQuality": 2.2
    },
    {
      "userID": 1,
      "date": "2019/06/16",
      "hoursSlept": 7,
      "sleepQuality": 4.7
    },
    {
      "userID": 1,
      "date": "2019/06/17",
      "hoursSlept": 10.8,
      "sleepQuality": 4.7
    },
    {
      "userID": 1,
      "date": "2019/06/18",
      "hoursSlept": 5.4,
      "sleepQuality": 3
    },
    {
      "userID": 1,
      "date": "2019/06/19",
      "hoursSlept": 4.1,
      "sleepQuality": 3.6
    },
    {
      "userID": 1,
      "date": "2019/06/20",
      "hoursSlept": 9.6,
      "sleepQuality": 2.9
    },
    {
      "userID": 1,
      "date": "2019/06/21",
      "hoursSlept": 5.1,
      "sleepQuality": 2.6
    },
    {
      "userID": 1,
      "date": "2019/06/22",
      "hoursSlept": 8.1,
      "sleepQuality": 3.5
    }]

    sleep = new Sleep(sleepData)
  });

  it('Should have sleep data', () => {
    expect(sleep.sleepData).to.eql(sleepData);
  });

  it('Should be able to get the average hours slept', () => {
    expect(sleep.getAverageHrsSlept()).to.equal(7.0);
  });

  it('Should be able to get average sleep quality', () => {
    expect(sleep.getAverageSleepQuality()).to.equal(3.4)
  });

  it('Should be able to get daily hours slept', () => {
    expect(sleep.getDailyHrsSlept("2019/06/22")).to.equal(8.1);
  });

  it('Should be able to get different daily hours slept', () => {
    expect(sleep.getDailyHrsSlept("2019/06/15")).to.equal(6.1);
  });

  it('Should be able to get daily sleep quality', () => {
    expect(sleep.getDailySleepQuality("2019/06/22")).to.equal(3.5);
  });

  it('Should be able to get different daily sleep quality', () => {
    expect(sleep.getDailySleepQuality("2019/06/15")).to.equal(2.2);
  });

  it('Should get weekly hours slept', () => {
    expect(sleep.getWeeklyHoursSlept("2019/06/22")).to.eql([7, 10.8, 5.4, 4.1, 9.6, 5.1, 8.1]);
  });

  it('Should get different weekly hours slept', () => {
    expect(sleep.getWeeklyHoursSlept("2019/06/21")).to.eql([6.1, 7, 10.8, 5.4, 4.1, 9.6, 5.1]);
  });

  it('Should get weekly sleep quality', () => {
    expect(sleep.getWeeklySleepQuality("2019/06/22")).to.eql([4.7, 4.7, 3, 3.6, 2.9, 2.6, 3.5]);
  });

  it('Should get different weekly sleep quality', () => {
    expect(sleep.getWeeklySleepQuality("2019/06/21")).to.eql([2.2, 4.7, 4.7, 3, 3.6, 2.9, 2.6]);
  });

  it('Should get weekly average sleep quality', () => {
    expect(sleep.getWeeklyAverageSleepQuality("2019/06/22")).to.equal(3.6);
  });

  it('Should get different weekly average sleep quality', () => {
    expect(sleep.getWeeklyAverageSleepQuality("2019/06/21")).to.equal(3.4);
  });
});
