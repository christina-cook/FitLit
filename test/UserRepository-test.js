const chai = require('chai');
const expect = chai.expect;
const UserRepository = require('../src/UserRepository');
const User = require('../src/User');
const Hydration = require('../src/Hydration')

describe('UserRepository', () => {
  let users, userRepository;

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

    hydrationData =   [{
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

});
