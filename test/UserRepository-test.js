const chai = require('chai');
const expect = chai.expect;
const UserRepository = require('../src/UserRepository');
const User = require('../src/User');

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
    userRepository = new UserRepository(users);
  })

  it.skip('Should have users', () => {
    expect(userRepository.users).to.eql(users);
  });

  it.skip('Should instantiate a new User', () => {
    userRepository.createUsers();
    expect(userRepository.users[0]).to.be.an.instanceof(User);
    expect(userRepository.users[1]).to.be.an.instanceof(User);
    expect(userRepository.users[2]).to.be.an.instanceof(User);

    // userRepository.users.forEach(user => {
    //   expect(userRepository).to.be.an.instanceof(User);
    // })
  });

  it.skip('Should be able to get a user by id', () => {
    expect(userRepository.returnUser(1)).to.equal(users[0]);
  });

  it.skip('Should return a different user', () => {
    expect(userRepository.returnUser(3)).to.equal(users[2]);
  })

  it.skip('Should calculate the average step goal for all users', () => {
    expect(userRepository.averageStepGoal()).to.equal(300);
    userRepository.users.pop();
    expect(userRepository.averageStepGoal()).to.equal(400);
  });

});
