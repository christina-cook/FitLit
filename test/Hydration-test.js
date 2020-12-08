const chai = require('chai');
const expect = chai.expect;
const UserRepository = require('../src/UserRepository');
const User = require('../src/User');
const Hydration = require('../src/Hydration');

describe('Hydration', () => {
  let hydration, hydrationData;

  beforeEach(() => {
    hydrationData = [
      {
        "userID": 1,
        "date": "2019/06/15",
        "numOunces": 37
      },
      {
        "userID": 1,
        "date": "2019/06/16",
        "numOunces": 75
      },
      {
        "userID": 1,
        "date": "2019/06/17",
        "numOunces": 47
      },
      {
        "userID": 1,
        "date": "2019/06/18",
        "numOunces": 35
      },
      {
        "userID": 1,
        "date": "2019/06/19",
        "numOunces": 77
      },
      {
        "userID": 1,
        "date": "2019/06/20",
        "numOunces": 45
      },
      {
        "userID": 1,
        "date": "2019/06/21",
        "numOunces": 39
      }];
    hydration = new Hydration(hydrationData);
  });

  it.skip('Should have Hydration data', () => {
    expect(hydration.hydrationData).to.eql(hydrationData);
  });

  it.skip('Should get the average ounces consumed', () => {
    expect(hydration.getAverageOz()).to.equal(51);
  });

  it.skip('Should get the daily ounces consumed', () => {
    expect(hydration.getDailyOz()).to.equal(39);
  });

  it.skip('Should get the weekly ounces consumed', () => {
    expect(hydration.getWeeklyOz()).to.equal(355);
  });
});
