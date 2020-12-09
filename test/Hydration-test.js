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
      },
      {
        "userID": 1,
        "date": "2019/06/22",
        "numOunces": 51
      }];
    hydration = new Hydration(hydrationData);
  });

  it('Should have Hydration data', () => {
    expect(hydration.hydrationData).to.eql(hydrationData);
  });

  it('Should get the average ounces consumed', () => {
    expect(hydration.getAverageOz()).to.equal(51);
  });

  it('Should get the daily ounces consumed', () => {
    expect(hydration.getDailyOz("2019/06/21")).to.equal(39);
  });

  it('Should get the daily ounces consumed for another day', () => {
    expect(hydration.getDailyOz("2019/06/19")).to.equal(77);
  });

  it('Should get the weekly ounces consumed', () => {
    expect(hydration.getWeeklyOz("2019/06/21")).to.eql([37, 75, 47, 35, 77, 45, 39]);
  });
});
