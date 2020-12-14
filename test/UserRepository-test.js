const chai = require('chai');
const expect = chai.expect;
const UserRepository = require('../src/UserRepository');
const User = require('../src/User');
const Hydration = require('../src/Hydration');
const Sleep = require('../src/Sleep');

describe('UserRepository', () => {
  let users, userRepository, hydrationData, sleepData;

  beforeEach(() => {
    users = [{
      "id": 1,
      "name": "Boone Epstein",
      "address": "1234 Street Avenue, Cityville CO 80222",
      "email": "boone@example.com",
      "strideLength": 3,
      "dailyStepGoal": 300,
      "friends": [
        16,
        4,
        8
      ]
    },
    {
      "id": 2,
      "name": "Christina Cook",
      "address": "2525 Cool Road, Town NE 85265",
      "email": "christina@example.com",
      "strideLength": 5,
      "dailyStepGoal": 500,
      "friends": [
        9,
        18,
        24,
        19
      ]
    },
    {
      "id": 3,
      "name": "Briarhill Danton",
      "address": "1000, Good Boy Place, Treatsville NY 78552",
      "email": "danny@example.com",
      "strideLength": 2,
      "dailyStepGoal": 100,
      "friends": [
        19,
        11,
        42,
        33
      ]
    }];

    hydrationData = [{
      "userID": 1,
      "date": "2019/06/15",
      "numOunces": 37
    },
    {
      "userID": 2,
      "date": "2019/06/15",
      "numOunces": 75
    },
    {
      "userID": 3,
      "date": "2019/06/15",
      "numOunces": 47
    },
    {
      "userID": 1,
      "date": "2019/06/16",
      "numOunces": 85
    },
    {
      "userID": 2,
      "date": "2019/06/16",
      "numOunces": 42
    },
    {
      "userID": 3,
      "date": "2019/06/16",
      "numOunces": 87
    }];

    sleepData = [  {
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
      "userID": 2,
      "date": "2019/06/15",
      "hoursSlept": 8.1,
      "sleepQuality": 3.5
    },
    {
      "userID": 2,
      "date": "2019/06/16",
      "hoursSlept": 4.4,
      "sleepQuality": 2.2
    },
    {
      "userID": 2,
      "date": "2019/06/17",
      "hoursSlept": 8.9,
      "sleepQuality": 1.6
    },
    {
      "userID": 2,
      "date": "2019/06/18",
      "hoursSlept": 4.9,
      "sleepQuality": 3.9
    },
    {
      "userID": 2,
      "date": "2019/06/19",
      "hoursSlept": 8,
      "sleepQuality": 3.4
    },
    {
      "userID": 2,
      "date": "2019/06/20",
      "hoursSlept": 10.1,
      "sleepQuality": 1.8
    },
    {
      "userID": 2,
      "date": "2019/06/21",
      "hoursSlept": 6.9,
      "sleepQuality": 1.2
    },
    {
      "userID": 3,
      "date": "2019/06/15",
      "hoursSlept": 4.6,
      "sleepQuality": 2.9
    },
    {
      "userID": 3,
      "date": "2019/06/16",
      "hoursSlept": 7,
      "sleepQuality": 3.5
    },
    {
      "userID": 3,
      "date": "2019/06/17",
      "hoursSlept": 4.7,
      "sleepQuality": 4
    },
    {
      "userID": 3,
      "date": "2019/06/18",
      "hoursSlept": 10.1,
      "sleepQuality": 1.3
    },
    {
      "userID": 3,
      "date": "2019/06/19",
      "hoursSlept": 7.9,
      "sleepQuality": 1.6
    },
    {
      "userID": 3,
      "date": "2019/06/20",
      "hoursSlept": 5,
      "sleepQuality": 1.6
    },
    {
      "userID": 3,
      "date": "2019/06/21",
      "hoursSlept": 9.6,
      "sleepQuality": 1
    }];

    userRepository = new UserRepository(users);
  })

  it('Should have users', () => {
    expect(userRepository.users).to.eql(users);
  });

  it('Should instantiate a new User', () => {
    userRepository.createUsers();

    userRepository.users.forEach(user => {
      expect(user).to.be.an.instanceof(User);
    })
  });

  it('Should be able to get a user by id', () => {
    expect(userRepository.returnUser(1)).to.equal(users[0]);
  });

  it('Should return a different user', () => {
    expect(userRepository.returnUser(3)).to.equal(users[2]);
  })

  it('Should calculate the average step goal for all users', () => {
    expect(userRepository.averageStepGoal()).to.equal(300);
    userRepository.users.pop();
    expect(userRepository.averageStepGoal()).to.equal(400);
  });

  it('Should fetch all user hydration', () => {
    userRepository.createUsers();
    userRepository.fetchAllHydration(hydrationData);

    userRepository.users.forEach(user => {
      expect(user.hydration).to.be.an.instanceof(Hydration);
    });
  });

  it('Should fetch all user sleep', () => {
    userRepository.createUsers();
    userRepository.fetchAllSleep(sleepData);

    userRepository.users.forEach(user => {
      expect(user.sleep).to.be.an.instanceof(Sleep);
    });
  });

  it('Should get average sleep quality for all users', () => {
    userRepository.createUsers();
    userRepository.fetchAllSleep(sleepData);

    expect(userRepository.getAllAvgSleepQuality()).to.equal(2.7);
  });

  it('Should find good sleepers', () => {
    userRepository.createUsers();
    userRepository.fetchAllSleep(sleepData);
    const user1 = userRepository.users[0];
    expect(userRepository.getGoodSleepers("2019/06/21")).to.eql([user1]);
  });

  it('Should find the user with the highest sleep', () => {
    userRepository.createUsers();
    userRepository.fetchAllSleep(sleepData);
    const user1 = userRepository.users[0];
    const user2 = userRepository.users[1];
    const user3 = userRepository.users[2];
    expect(userRepository.findHighestSleepUser("2019/06/15")).to.eql([user2]);
    expect(userRepository.findHighestSleepUser("2019/06/16")).to.eql([user1, user3]);
  });

  it('Should fetch all user activity', () => {

  });

  it('Should get the daily average steps taken', () => {

  });

  it('Should get the daily average stairs climbed', () => {

  });

  it('Should get the daily average minutes active', () => {

  });
});
