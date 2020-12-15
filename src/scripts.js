const userRepository = new UserRepository(userData);
userRepository.createUsers();
userRepository.fetchAllHydration(hydrationData);
userRepository.fetchAllSleep(sleepData);
userRepository.fetchAllActivity(activityData);

const user = userRepository.users[getRandomIndex(userRepository.users)]

const today = "2019/09/22";
const week = ["16", "17", "18", "19", "20", "21", "22"];

const backButton = document.querySelector('.back-button');
const hydrationIcon = document.querySelector('.hydration-icon');
const sleepIcon = document.querySelector('.sleep-icon');
const activityIcon = document.querySelector('.activity-icon');

const welcomeMessage = document.querySelector('.welcome-message');
const userInfo = document.querySelector('.user-info');
const stepGoalCompare = document.querySelector('.step-goal-compare');
const homeDashboard = document.querySelector('.home-dashboard');
const hydrationButton = document.querySelector('.hydration-button');
const sleepButton = document.querySelector('.sleep-button');
const activityButton = document.querySelector('.activity-button');

const hydrationDashboard = document.querySelector('.hydration-dashboard');
const dailyHydration = document.querySelector('.daily-hydration');
const weeklyHydration = document.querySelector('.weekly-hydration');

const sleepDashboard = document.querySelector('.sleep-dashboard');
const hoursSlept = document.querySelector('.hours-slept');
const sleepQuality = document.querySelector('.sleep-quality');
const weeklyHoursSlept = document.querySelector('.weekly-hours-slept');
const weeklySleepQuality = document.querySelector('.weekly-sleep-quality');

const activityDashboard = document.querySelector('.activity-dashboard');
const weeklySteps = document.querySelector('.weekly-steps');
const weeklyStairs = document.querySelector('.weekly-stairs');
const weeklyMinutes = document.querySelector('.weekly-minutes');
const dailySteps = document.querySelector('.daily-steps');
const dailyMinutes = document.querySelector('.daily-minutes');
const dailyDistance = document.querySelector('.daily-distance');
const dailyFlights = document.querySelector('.daily-flights');

welcomeMessage.innerText = `Welcome ${user.returnFirstName()}!`;
userInfo.innerText = `${user.address}\n${user.email}`;
stepGoalCompare.innerText = `Your step goal is ${user.dailyStepGoal} steps per day.\nThe average goal is ${userRepository.averageStepGoal()} steps per day.`

dailyHydration.innerText = user.hydration.getDailyOz(today);
weeklyHydration.innerText = `${user.hydration.getWeeklyOz(today)}\n${week}`;

hoursSlept.innerText = `Last night you slept ${user.sleep.getDailyHrsSlept(today)} hours\nYour average is ${user.sleep.getAverageHrsSlept()} hours`;
sleepQuality.innerText = `Your quality of sleep last night was ${user.sleep.getDailySleepQuality(today)}/5\nYour average is ${user.sleep.getAverageSleepQuality()}/5`;
weeklyHoursSlept.innerText = `${user.sleep.getWeeklyHoursSlept(today)}\n${week}`;
weeklySleepQuality.innerText = `${user.sleep.getWeeklySleepQuality(today)}\n${week}`;

hydrationButton.addEventListener('click', toggleHydration);
sleepButton.addEventListener('click', toggleSleep);
activityButton.addEventListener('click', toggleActivity);
backButton.addEventListener('click', toggleBack);

dailySteps.innerText = `Steps today: ${user.activity.getDailySteps(today)}\nUser average: ${userRepository.getDailyAverageSteps(today)}`;
dailyMinutes.innerText = `Minutes Active today: ${user.activity.getDailyMinutesActive(today)}\nUser average: ${userRepository.getDailyAverageMinutes(today)}`;
dailyDistance.innerText = `Miles Walked today: ${user.getDailyMilesWalked(today)}`;
dailyFlights.innerText = `Flights climbed today: ${user.activity.getDailyStairsClimbed(today)}\nUser average: ${userRepository.getDailyAverageStairs(today)}`
weeklySteps.innerText = `${user.activity.getWeeklyStepCount(today)}\n${week}`;
weeklyStairs.innerText = `${user.activity.getWeeklyStairsClimbed(today)}\n${week}`;
weeklyMinutes.innerText = `${user.activity.getWeeklyMinutesActive(today)}\n${week}`;


function toggleHydration() {
  homeDashboard.classList.toggle('hidden');
  hydrationDashboard.classList.toggle('hidden');
  backButton.classList.toggle('hidden');
  hydrationIcon.classList.toggle('hidden');
}

function toggleSleep() {
  homeDashboard.classList.toggle('hidden');
  sleepDashboard.classList.toggle('hidden');
  backButton.classList.toggle('hidden');
  sleepIcon.classList.toggle('hidden');
}

function toggleActivity() {
  homeDashboard.classList.toggle('hidden');
  activityDashboard.classList.toggle('hidden');
  backButton.classList.toggle('hidden');
  activityIcon.classList.toggle('hidden');
}

function toggleBack() {
  if (!hydrationDashboard.classList.contains('hidden')) {
    toggleHydration();
  } else if (!sleepDashboard.classList.contains('hidden')) {
    toggleSleep();
  } else if (!activityDashboard.classList.contains('hidden')) {
    toggleActivity();
  }
}
