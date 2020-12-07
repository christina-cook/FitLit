const User = require('../src/User');

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

module.exports = UserRepository;

// createUsers(userData) {
//   this.users = userData.map(data => {
//     const user = new User();
//     for (key in data) {
//       user[key] = data[key];
//     }
//     return this.users.push(user);
//   });
// }
