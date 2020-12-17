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
      },
      {
        "userID": 1,
        "date": "2019/06/22",
        "numSteps": 2452,
        "minutesActive": 98,
        "flightsOfStairs": 4
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

  it('Should get different daily step count', () => {
    expect(activity.getDailySteps("2019/06/21")).to.equal(2634);
  });

  it('Should get daily minutes active', () => {
    expect(activity.getDailyMinutesActive("2019/06/20")).to.equal(287);
  });

  it('Should get different daily minutes active', () => {
    expect(activity.getDailyMinutesActive("2019/06/21")).to.equal(107);
  });

  it('Should get daily flights climbed', () => {
    expect(activity.getDailyFlightsClimbed("2019/06/20")).to.equal(18);
  });

  it('Should get different daily flights climbed', () => {
    expect(activity.getDailyFlightsClimbed("2019/06/21")).to.equal(5);
  });

  it('Should get weekly minutes active', () => {
    expect(activity.getWeeklyMinutesActive("2019/06/21")).to.eql([140, 138, 116, 114, 213, 287, 107]);
  });

  it('Should get different weekly minutes active', () => {
    expect(activity.getWeeklyMinutesActive("2019/06/22")).to.eql([138, 116, 114, 213, 287, 107, 98]);
  });

  it('Should get weekly average minutes active', () => {
    expect(activity.getWeeklyAvgMinutesActive("2019/06/21")).to.equal(159);
  });

  it('Should get different weekly average minutes active', () => {
    expect(activity.getWeeklyAvgMinutesActive("2019/06/22")).to.equal(153);
  });

  it('Should get weekly step counts', () => {
    expect(activity.getWeeklyStepCount("2019/06/21")).to.eql([3577, 4294, 7402, 3486, 11374, 14810, 2634]);
  });

  it('Should get different weekly step counts', () => {
    expect(activity.getWeeklyStepCount("2019/06/22")).to.eql([4294, 7402, 3486, 11374, 14810, 2634, 2452]);
  });

  it('Should get weekly flights climbed', () => {
    expect(activity.getWeeklyFlightsClimbed("2019/06/21")).to.eql([16, 10, 33, 32, 13, 18, 5]);
  });

  it('Should get different weekly flights climbed', () => {
    expect(activity.getWeeklyFlightsClimbed("2019/06/22")).to.eql([10, 33, 32, 13, 18, 5, 4]);
  });

  it('Should get the record number of flights climbed', () => {
    expect(activity.getRecordNumberOfFlightsClimbed()).to.equal(33);
  });
});
