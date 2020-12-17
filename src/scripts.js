const today = "2019/09/22";
const week = ["9/16", "9/17", "9/18", "9/19", "9/20", "9/21", "9/22"];

const backButton = document.querySelector('.topbar__backbtn');
const hydrationIcon = document.querySelector('.topbar__hydrationicon');
const sleepIcon = document.querySelector('.topbar__sleepicon');
const activityIcon = document.querySelector('.topbar__activityicon');

const welcomeMessage = document.getElementById('welcome-message');
const userInfo = document.getElementById('user-info');
const stepGoalCompare = document.getElementById('step-goal-compare');
const homeDashboard = document.querySelector('.homedash');
const hydrationButton = document.getElementById('hydration-button');
const sleepButton = document.getElementById('sleep-button');
const activityButton = document.getElementById('activity-button');

const hydrationDashboard = document.querySelector('.hydrationdash');
const ouncesToday = document.getElementById('ounces-today');
const avgOunces = document.getElementById('avg-ounces-today');
const weeklyHydration = document.getElementById('hydration-chart').getContext('2d');

const sleepDashboard = document.querySelector('.sleepdash');
const hoursToday = document.getElementById('hours-today');
const avgHours = document.getElementById('avg-hours-today');
const qualityToday = document.getElementById('quality-today');
const avgQuality = document.getElementById('avg-quality-today');
const weeklyHoursSlept = document.getElementById('weekly-hours-chart').getContext('2d');
const weeklySleepQuality = document.getElementById('weekly-quality-chart').getContext('2d');

const activityDashboard = document.querySelector('.activitydash');
const weeklySteps = document.getElementById('weekly-steps-chart').getContext('2d');
const weeklyStairs = document.getElementById('weekly-flights-chart').getContext('2d');
const weeklyMinutes = document.getElementById('weekly-minutes-chart').getContext('2d');
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

let userRepository;
let user;

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
  userRepository = new UserRepository(userData);
  userRepository.createUsers();
  userRepository.fetchAllHydration(hydrationData);
  userRepository.fetchAllSleep(sleepData);
  userRepository.fetchAllActivity(activityData);
  user = userRepository.users[getRandomIndex(userRepository.users)];
}

function updateMainDash() {
  welcomeMessage.innerText = `Welcome ${user.returnFirstName()}!`;
  userInfo.innerText = `${user.address}\n${user.email}`;
  stepGoalCompare.innerText = `Your step goal is ${user.dailyStepGoal} steps per day.\nThe average goal is ${userRepository.averageStepGoal()} steps per day.`;
}

function updateHydrationDash() {
  ouncesToday.innerText = user.hydration.getDailyOz(today);
  avgOunces.innerText = user.hydration.getAverageOz();
  hydrationChart = new Chart(weeklyHydration, formatChart('Daily Ounces', user.hydration.getWeeklyOz(today), week));
}

function updateSleepDash() {
  hoursToday.innerText = user.sleep.getDailyHrsSlept(today);
  avgHours.innerText = user.sleep.getAverageHrsSlept();
  qualityToday.innerText = `${user.sleep.getDailySleepQuality(today)}/5`;
  avgQuality.innerText = `${user.sleep.getAverageSleepQuality()}/5`;
  weeklySleepChart = new Chart(weeklyHoursSlept, formatChart('Hours of Sleep', user.sleep.getWeeklyHoursSlept(today), week));
  weeklySleepQualityChart = new Chart(weeklySleepQuality, formatChart('Sleep Quality', user.sleep.getWeeklySleepQuality(today), week));
}

function updateActivityDash() {
  stepsToday.innerText = user.activity.getDailySteps(today);
  avgStepsToday.innerText = userRepository.getDailyAverageSteps(today);
  minutesToday.innerText = user.activity.getDailyMinutesActive(today);
  avgMinutesToday.innerText = userRepository.getDailyAverageMinutes(today);
  milesToday.innerText = user.getDailyMilesWalked(today);
  flightsToday.innerText = user.activity.getDailyFlightsClimbed(today);
  avgFlightsToday.innerText = userRepository.getDailyAverageFlights(today);
  weeklyStepsChart = new Chart(weeklySteps, formatChart('Steps Taken', user.activity.getWeeklyStepCount(today), week));
  weeklyFlightsChart = new Chart(weeklyStairs, formatChart('Flights Climbed', user.activity.getWeeklyFlightsClimbed(today), week));
  weeklyMinutesChart = new Chart(weeklyMinutes, formatChart('Minutes Active', user.activity.getWeeklyMinutesActive(today), week));
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
