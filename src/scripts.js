const userRepository = new UserRepository(userData);
userRepository.createUsers();
userRepository.fetchAllHydration(hydrationData);

const user = userRepository.users[0]

const welcomeMessage = document.querySelector('.welcome-message');
const userInfo = document.querySelector('.user-info');
const stepGoalCompare = document.querySelector('.step-goal-compare');
const homeDashboard = document.querySelector('.home-dashboard');
const hydrationButton = document.querySelector('.hydration-button');
const sleepButton = document.querySelector('.sleep-button');
const activityButton = document.querySelector('.activityButton');
const hydrationDashboard = document.querySelector('.hydration-dashboard');


welcomeMessage.innerText = `Welcome ${user.returnFirstName()}!`;
userInfo.innerText = `${user.address}\n${user.email}`;
stepGoalCompare.innerText = `Your step goal is ${user.dailyStepGoal} steps per day.\nThe average goal is ${userRepository.averageStepGoal()} steps per day.`
