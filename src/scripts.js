const userRepository = new UserRepository(userData);

const user = userRepository.users[getRandomIndex(userRepository.users)]

const today = "2019/09/22";
const week = ["9/16", "9/17", "9/18", "9/19", "9/20", "9/21", "9/22"];

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
const ouncesToday = document.getElementById('ounces-today');
const avgOunces = document.getElementById('avg-ounces-today');
const weeklyHydration = document.querySelector('.hydration-chart').getContext('2d');

const sleepDashboard = document.querySelector('.sleep-dashboard');
const hoursToday = document.getElementById('hours-today');
const avgHours = document.getElementById('avg-hours-today');
const qualityToday = document.getElementById('quality-today');
const avgQuality = document.getElementById('avg-quality-today');
const weeklyHoursSlept = document.querySelector('.weekly-hours-chart').getContext('2d');
const weeklySleepQuality = document.querySelector('.weekly-quality-chart').getContext('2d');

const activityDashboard = document.querySelector('.activity-dashboard');
const weeklySteps = document.querySelector('.weekly-steps-chart').getContext('2d');
const weeklyStairs = document.querySelector('.weekly-flights-chart').getContext('2d');
const weeklyMinutes = document.querySelector('.weekly-minutes-chart').getContext('2d');
const stepsToday = document.getElementById('steps-today');
const avgStepsToday = document.getElementById('avg-steps-today');
const minutesToday = document.getElementById('minutes-today');
const avgMinutesToday = document.getElementById('avg-minutes-today');
const milesToday = document.getElementById('miles-today');
const flightsToday = document.getElementById('flights-today');
const avgFlightsToday = document.getElementById('avg-flights-today');

let hydrationChart;
let weeklySleepChart;
let weeklySleepQualityChart;
let weeklyStepsChart;
let weeklyFlightsChart;
let weeklyMinutesChart;

window.addEventListener('load', function() {
  updateUserRepo();
  updateMainDash();
  updateHydrationDash();
  updateSleepDash();
  updateActivityDash();
})
hydrationButton.addEventListener('click', toggleHydration);
sleepButton.addEventListener('click', toggleSleep);
activityButton.addEventListener('click', toggleActivity);
backButton.addEventListener('click', toggleBack);

function updateUserRepo() {
  userRepository.createUsers();
  userRepository.fetchAllHydration(hydrationData);
  userRepository.fetchAllSleep(sleepData);
  userRepository.fetchAllActivity(activityData);
}


function updateMainDash() {
  welcomeMessage.innerText = `Welcome ${user.returnFirstName()}!`;
  userInfo.innerText = `${user.address}\n${user.email}`;
  stepGoalCompare.innerText = `Your step goal is ${user.dailyStepGoal} steps per day.\nThe average goal is ${userRepository.averageStepGoal()} steps per day.`
}

function updateHydrationDash() {
  ouncesToday.innerText = user.hydration.getDailyOz(today);
  avgOunces.innerText = user.hydration.getAverageOz();
  hydrationChart = new Chart(weeklyHydration, formatChart('Daily Ounces', user.hydration.getWeeklyOz(today)));
}

function updateSleepDash() {
  hoursToday.innerText = user.sleep.getDailyHrsSlept(today);
  avgHours.innerText = user.sleep.getAverageHrsSlept();
  qualityToday.innerText = `${user.sleep.getDailySleepQuality(today)}/5`;
  avgQuality.innerText = `${user.sleep.getAverageSleepQuality()}/5`;
  weeklySleepChart = new Chart(weeklyHoursSlept, formatChart('Hours of Sleep', user.sleep.getWeeklyHoursSlept(today)));
  weeklySleepQualityChart = new Chart(weeklySleepQuality, formatChart('Sleep Quality', user.sleep.getWeeklySleepQuality(today)));
}

function updateActivityDash() {
  stepsToday.innerText = user.activity.getDailySteps(today);
  avgStepsToday.innerText = userRepository.getDailyAverageSteps(today);
  minutesToday.innerText = user.activity.getDailyMinutesActive(today);
  avgMinutesToday.innerText = userRepository.getDailyAverageMinutes(today);
  milesToday.innerText = user.getDailyMilesWalked(today);
  flightsToday.innerText = user.activity.getDailyStairsClimbed(today);
  avgFlightsToday.innerText = userRepository.getDailyAverageStairs(today);
  weeklyStepsChart = new Chart(weeklySteps, formatChart('Steps Taken', user.activity.getWeeklyStepCount(today)));
  weeklyFlightsChart = new Chart(weeklyStairs, formatChart('Flights Climbed', user.activity.getWeeklyStairsClimbed(today)));
  weeklyMinutesChart = new Chart(weeklyMinutes, formatChart('Minutes Active', user.activity.getWeeklyMinutesActive(today)));
}


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
