const chai = require('chai');
const expect = chai.expect;
const Activity = require('../src/Activity');

describe('Activity', () => {
  let activityData, activity;

  beforeEach(() => {
    activityData = [
      {
        "userID": 1,
        "date": "2019/06/15",
        "numSteps": 3577,
        "minutesActive": 140,
        "flightsOfStairs": 16
      },
      {
        "userID": 1,
        "date": "2019/06/16",
        "numSteps": 4294,
        "minutesActive": 138,
        "flightsOfStairs": 10
      },
      {
        "userID": 1,
        "date": "2019/06/17",
        "numSteps": 7402,
        "minutesActive": 116,
        "flightsOfStairs": 33
      },
      {
        "userID": 1,
        "date": "2019/06/18",
        "numSteps": 3486,
        "minutesActive": 114,
        "flightsOfStairs": 32
      },
      {
        "userID": 1,
        "date": "2019/06/19",
        "numSteps": 11374,
        "minutesActive": 213,
        "flightsOfStairs": 13
      },
      {
        "userID": 1,
        "date": "2019/06/20",
        "numSteps": 14810,
        "minutesActive": 287,
        "flightsOfStairs": 18
      },
      {
        "userID": 1,
        "date": "2019/06/21",
        "numSteps": 2634,
        "minutesActive": 107,
        "flightsOfStairs": 5
      }
    ];

    activity = new Activity(activityData);
  });

  it('Should have activity data', () => {
    expect(activity.activityData).to.eql(activityData);
  });

  it('Should get daily step count', () => {
    expect(activity.getDailySteps("2019/06/20")).to.equal(14810);
  });

  it('Should get daily minutes active', () => {
    expect(activity.getDailyMinutesActive("2019/06/20")).to.equal(287);
  });

  it('Should get daily stairs climbed', () => {
    expect(activity.getDailyStairsClimbed("2019/06/20")).to.equal(18);
  });

  it('Should get weekly minutes active', () => {
    expect(activity.getWeeklyMinutesActive("2019/06/21")).to.eql([140, 138, 116, 114, 213, 287, 107]);
  });

  it('Should get weekly average minutes active', () => {
    expect(activity.getWeeklyAvgMinutesActive("2019/06/21")).to.equal(159);
  });

  it('Should get weekly step counts', () => {
    expect(activity.getWeeklyStepCount("2019/06/21")).to.eql([3577, 4294, 7402, 3486, 11374, 14810, 2634]);
  });

  it('Should get weekly stairs climbed', () => {
    expect(activity.getWeeklyStairsClimbed("2019/06/21")).to.eql([16, 10, 33, 32, 13, 18, 5]);
  });

  it('Should get the record number of stairs climbed', () => {
    expect(activity.getRecordNumberOfStairsClimbed()).to.equal(33);
  });
});
