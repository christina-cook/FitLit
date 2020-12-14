const chai = require('chai');
const expect = chai.expect;
const User = require('../src/User');
const Hydration = require('../src/Hydration');
const Sleep = require('../src/Sleep');
const Activity = require('../src/Activity');

describe('User', () => {
  let user3, user4, hydrationData, sleepData;

  beforeEach(() => {
    user3 = new User(3, 'Briarhill Danton',
      '1000 Good Boy Place, Treatsville NY 78552',
      'danny@example.com', 2, 100, [19, 11, 42, 33]);

    user4 = new User(4, 'Forrest Cook',
      '1234 Best Boy Ave, Las Vegas NV 80001',
      'forrest@example.com', 3, 250, [12, 17, 2, 5]);

    hydrationData = [{
      "userID": 3,
      "date": "2019/06/15",
      "numOunces": 37
    },
    {
      "userID": 4,
      "date": "2019/06/15",
      "numOunces": 75
    },
    {
      "userID": 3,
      "date": "2019/06/16",
      "numOunces": 47
    },
    {
      "userID": 4,
      "date": "2019/06/16",
      "numOunces": 85
    }];

    sleepData = [{
      "userID": 3,
      "date": "2019/06/15",
      "hoursSlept": 6.1,
      "sleepQuality": 2.2
    },
    {
      "userID": 4,
      "date": "2019/06/16",
      "hoursSlept": 7,
      "sleepQuality": 4.7
    }]
  });

  it('should have an id', () => {
    expect(user3.id).to.equal(3);
  });

  it('should have a different id', () => {
    expect(user4.id).to.equal(4);
  });

  it('should have a name', () => {
    expect(user3.name).to.equal('Briarhill Danton');
  });

  it('should have a different name', () => {
    expect(user4.name).to.equal('Forrest Cook');
  });

  it('should have an address', () => {
    expect(user3.address).to.equal('1000 Good Boy Place, Treatsville NY 78552');
  });

  it('should have a different address', () => {
    expect(user4.address).to.equal('1234 Best Boy Ave, Las Vegas NV 80001');
  });

  it('should have an email', () => {
    expect(user3.email).to.equal('danny@example.com');
  });

  it('should have a different email', () => {
    expect(user4.email).to.equal('forrest@example.com');
  });

  it('should have a stride length', () => {
    expect(user3.strideLength).to.equal(2);
  });

  it('should have a diffent stride length', () => {
    expect(user4.strideLength).to.equal(3);
  });

  it('should have a daily step goal', () => {
    expect(user3.dailyStepGoal).to.equal(100);
  });

  it('should have a different daily step goal', () => {
    expect(user4.dailyStepGoal).to.equal(250);
  });

  it('should have friends', () => {
    expect(user3.friends).to.eql([19, 11, 42, 33]);
  });

  it('should have different friends', () => {
    expect(user4.friends).to.eql([12, 17, 2, 5]);
  });

  it('should return the first name', () => {
    expect(user3.returnFirstName()).to.equal('Briarhill');
  });

  it('should return a different first name', () => {
    expect(user4.returnFirstName()).to.equal('Forrest');
  });

  it('Should fetch Hydration data', () => {
    user3.fetchHydration(hydrationData);
    expect(user3.hydration).to.be.an.instanceof(Hydration);
  });

  it('Should have a Hydration property', () => {
    user3.fetchHydration(hydrationData);
    expect(user3.hydration.hydrationData).to.eql([{
      "userID": 3,
      "date": "2019/06/15",
      "numOunces": 37
    },
    {
      "userID": 3,
      "date": "2019/06/16",
      "numOunces": 47
    }]);
  });

  it('Should have a different Hydration property', () => {
    user4.fetchHydration(hydrationData);
    expect(user4.hydration.hydrationData).to.eql([{

      "userID": 4,
      "date": "2019/06/15",
      "numOunces": 75
    },
    {
      "userID": 4,
      "date": "2019/06/16",
      "numOunces": 85
    }]);
  });

  it('Should fetch Sleep data', () => {
    user3.fetchSleep(sleepData);
    expect(user3.sleep).to.be.an.instanceof(Sleep);
  });

  it('Should have a Sleep property', () => {
    user3.fetchSleep(sleepData);
    expect(user3.sleep.sleepData).to.eql([{
      "userID": 3,
      "date": "2019/06/15",
      "hoursSlept": 6.1,
      "sleepQuality": 2.2
    }])
  });

  it('Should have a different Sleep property', () => {
    user4.fetchSleep(sleepData);
    expect(user4.sleep.sleepData).to.eql([{
      "userID": 4,
      "date": "2019/06/16",
      "hoursSlept": 7,
      "sleepQuality": 4.7
    }])
  });

  it('Should fetch Activity data', () => {

  });

  it('Should have a Activity property', () => {

  });

  it('Should have a different Activity property', () => {

    }])
  });

});
