const userRepository = new UserRepository(userData);
userRepository.createUsers();
userRepository.fetchAllHydration(hydrationData);

const user = userRepository.users[0]

const today = "2019/09/22"
const week = ["16", "17", "18", "19", "20", "21", "22"]

const welcomeMessage = document.querySelector('.welcome-message');
const userInfo = document.querySelector('.user-info');
const stepGoalCompare = document.querySelector('.step-goal-compare');
const homeDashboard = document.querySelector('.home-dashboard');
const hydrationButton = document.querySelector('.hydration-button');
const backButton = document.querySelector('.back-button');
const hydrationIcon = document.querySelector('.hydration-icon');
const sleepButton = document.querySelector('.sleep-button');
const activityButton = document.querySelector('.activityButton');
const hydrationDashboard = document.querySelector('.hydration-dashboard');
const dailyHydration = document.querySelector('.daily-hydration');
const weeklyHydration = document.querySelector('.weekly-hydration');


welcomeMessage.innerText = `Welcome ${user.returnFirstName()}!`;
userInfo.innerText = `${user.address}\n${user.email}`;
stepGoalCompare.innerText = `Your step goal is ${user.dailyStepGoal} steps per day.\nThe average goal is ${userRepository.averageStepGoal()} steps per day.`
dailyHydration.innerText = user.hydration.getDailyOz(today);
weeklyHydration.innerText = `${user.hydration.getWeeklyOz(today)}\n${week}`;

hydrationButton.addEventListener('click', toggleHydration);
backButton.addEventListener('click', toggleBack);

function toggleHydration() {
  homeDashboard.classList.toggle('hidden');
  hydrationDashboard.classList.toggle('hidden');
  backButton.classList.toggle('hidden');
  hydrationIcon.classList.toggle('hidden');
}

function toggleBack() {
  if (!hydrationDashboard.classList.contains('hidden')) {
    toggleHydration();
  }
}
