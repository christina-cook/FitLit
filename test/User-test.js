const chai = require('chai');
const expect = chai.expect;
const User = require('../src/User');

describe('User', () => {
  let user;

  beforeEach(() => {
    user1 = new User(3, 'Briarhill Danton',
    '1000 Good Boy Place, Treatsville NY 78552',
    'danny@example.com', 2, 100, [19, 11, 42, 33]);

    user2 = new User(4, 'Forrest Cook',
    '1234 Best Boy Ave, Las Vegas NV 80001',
    'forrest@example.com', 3, 250, [12, 17, 2, 5]);
  });

  it.skip('should have an id', () => {
    expect(user1.id).to.equal(3);
  });

  it.skip('should have a different id', () => {
    expect(user2.id).to.equal(4);
  });

  it.skip('should have a name', () => {
    expect(user1.name).to.equal('Briarhill Danton');
  });

  it.skip('should have a different name', () => {
    expect(user2.name).to.equal('Forrest Cook');
  });

  it.skip('should have an address', () => {
    expect(user1.address).to.equal('1000 Good Boy Place, Treatsville NY 78552');
  });

  it.skip('should have a different address', () => {
    expect(user2.address).to.equal('1234 Best Boy Ave, Las Vegas NV 80001');
  });

  it.skip('should have an email', () => {
    expect(user1.email).to.equal('danny@example.com');
  });

  it.skip('should have a different email', () => {
    expect(user2.email).to.equal('forrest@example.com');
  });

  it.skip('should have a stride length', () => {
    expect(user1.strideLength).to.equal(2);
  });

  it.skip('should have a diffent stride length', () => {
    expect(user2.strideLength).to.equal(3);
  });

  it.skip('should have a daily step goal', () => {
    expect(user1.dailyStepGoal).to.equal(100);
  });

  it.skip('should have a different daily step goal', () => {
    expect(user2.dailyStepGoal).to.equal(250);
  });

  it.skip('should have friends', () => {
    expect(user1.friends).to.eql([19, 11, 42, 33]);
  });

  it.skip('should have different friends', () => {
    expect(user2.friends).to.eql([12, 17, 2, 5]);
  });

  it.skip('should return the first name', () => {
    expect(user1.returnFirstName()).to.equal('Briarhill');
  });

  it.skip('should return a different first name', () => {
    expect(user2.returnFirstName()).to.equal('Forrest');
  });
});
