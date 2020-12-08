const userRepository = new UserRepository(userData);
userRepository.createUsers();

const user = userRepository.users[0]

const welcomeMessage = document.querySelector('.welcome-message');
const userInfo = document.querySelector('.user-info');
const stepGoalCompare = document.querySelector('.step-goal-compare');

welcomeMessage.innerText = `Welcome ${user.returnFirstName()}!`;
userInfo.innerText = `${user.address}\n${user.email}`;
stepGoalCompare.innerText = `Your step goal is ${user.dailyStepGoal} steps per day.\nThe average goal is ${userRepository.averageStepGoal()} steps per day.`
