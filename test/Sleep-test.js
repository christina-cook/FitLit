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

  it.skip('Should have sleep data', () => {
    expect(sleep.sleepData).to.eql(sleepData);
  });

  it.skip('Should be able to get the average hours slept', () => {
    expect(sleep.getAverageHrsSlept()).to.equal(7.9);
  });

  it.skip('Should be able to get average sleep quality', () => {
    expect(sleep.getAverageSleepQuality()).to.equal(3.4)
  });

  it.skip('Should be able to get daily hours slept', () => {
    expect(sleep.getDailyHrsSlept("2019/06/22")).to.equal(8.1);
  });

  it.skip('Should be able to get different daily hours slept', () => {
    expect(sleep.getDailyHrsSlept("2019/06/15")).to.equal(6.1);
  });

  it.skip('Should be able to get daily sleep quality', () => {
    expect(sleep.getDailySleepQuality("2019/06/22")).to.equal(3.5);
  });

  it.skip('Should be able to get different daily sleep quality', () => {
    expect(sleep.getDailySleepQuality("2019/06/15")).to.equal(2.2);
  });

  it.skip('Should get weekly average hours slept', () => {
    expect(sleep.getWeeklyAverageHrsSlept("2019/06/22")).to.equal(7.2);
  });

  it.skip('Should get different weekly average hours slept', () => {
    expect(sleep.getWeeklyAverageHrsSlept("2019/06/21")).to.equal(6.2);
  });

  it.skip('Should get weekly average sleep quality', () => {
    expect(sleep.getWeeklyAverageSleepQuality("2019/06/22")).to.equal(3.6);
  });

  it.skip('Should get different weekly average sleep quality', () => {
    expect(sleep.getWeeklyAverageSleepQuality("2019/06/21")).to.equal(3.4);
  });
});
