if (typeof require !== 'undefined') {
  const User = require('../src/User');
}

class UserRepository {
  constructor(userData) {
    this.users = userData;
  }

  createUsers() {
    this.users = this.users.map(data => {
      return new User(data.id, data.name, data.address, data.email,
        data.strideLength, data.dailyStepGoal, data.friends);
    });
  }

  returnUser(id) {
    return this.users.find(user => user.id === id);
  }

  averageStepGoal() {
    const average = this.users.reduce((sum, user) => {
      return sum + user.dailyStepGoal
    }, 0) / this.users.length;
    return average;
  }
}

if (typeof module !== 'undefined') {
  module.exports = UserRepository;
}
