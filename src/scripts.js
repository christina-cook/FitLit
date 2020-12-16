const userRepository = new UserRepository(userData);
userRepository.createUsers();
userRepository.fetchAllHydration(hydrationData);
userRepository.fetchAllSleep(sleepData);
userRepository.fetchAllActivity(activityData);

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

welcomeMessage.innerText = `Welcome ${user.returnFirstName()}!`;
userInfo.innerText = `${user.address}\n${user.email}`;
stepGoalCompare.innerText = `Your step goal is ${user.dailyStepGoal} steps per day.\nThe average goal is ${userRepository.averageStepGoal()} steps per day.`

ouncesToday.innerText = user.hydration.getDailyOz(today);
avgOunces.innerText = user.hydration.getAverageOz();

const hydrationChart = new Chart(weeklyHydration, {
  type: 'bar',
  data: {
    labels: week,
    datasets: [{
      label: 'Daily Ounces',
      data: user.hydration.getWeeklyOz(today),
      backgroundColor: [
        '#A9B9FC',
        '#C3A9FC',
        '#ECA9FC',
        '#FCA9E3',
        '#FCA9B9',
        '#FCC3A9',
        '#FCEDA9'
      ],
    }]
  },
  options: {
    legend: {
      onClick: null,
      labels: {
        boxWidth: 0,
        fontSize: 20,
      }
    },
  }
});

const weeklySleepChart = new Chart(weeklyHoursSlept, {
  type: 'bar',
  data: {
    labels: week,
    datasets: [{
      label: 'Hours of Sleep',
      data: user.sleep.getWeeklyHoursSlept(today),
      backgroundColor: [
        '#A9B9FC',
        '#C3A9FC',
        '#ECA9FC',
        '#FCA9E3',
        '#FCA9B9',
        '#FCC3A9',
        '#FCEDA9'
      ],
    }]
  },
  options: {
    legend: {
      onClick: null,
      labels: {
        boxWidth: 0,
        fontSize: 20,
      }
    },
  }
});

const weeklySleepQualityChart = new Chart(weeklySleepQuality, {
  type: 'bar',
  data: {
    labels: week,
    datasets: [{
      label: 'Sleep Quality',
      data: user.sleep.getWeeklySleepQuality(today),
      backgroundColor: [
        '#A9B9FC',
        '#C3A9FC',
        '#ECA9FC',
        '#FCA9E3',
        '#FCA9B9',
        '#FCC3A9',
        '#FCEDA9'
      ],
    }]
  },
  options: {
    legend: {
      onClick: null,
      labels: {
        boxWidth: 0,
        fontSize: 20,
      }
    }
  }
});


hoursToday.innerText = user.sleep.getDailyHrsSlept(today);
avgHours.innerText = user.sleep.getAverageHrsSlept();
qualityToday.innerText = `${user.sleep.getDailySleepQuality(today)}/5`;
avgQuality.innerText = `${user.sleep.getAverageSleepQuality()}/5`;

hydrationButton.addEventListener('click', toggleHydration);
sleepButton.addEventListener('click', toggleSleep);
activityButton.addEventListener('click', toggleActivity);
backButton.addEventListener('click', toggleBack);

stepsToday.innerText = user.activity.getDailySteps(today);
avgStepsToday.innerText = userRepository.getDailyAverageSteps(today);
minutesToday.innerText = user.activity.getDailyMinutesActive(today);
avgMinutesToday.innerText = userRepository.getDailyAverageMinutes(today);
milesToday.innerText = user.getDailyMilesWalked(today);
flightsToday.innerText = user.activity.getDailyStairsClimbed(today);
avgFlightsToday.innerText = userRepository.getDailyAverageStairs(today);
const weeklyStepsChart = new Chart(weeklySteps, {
  type: 'bar',
  data: {
    labels: week,
    datasets: [{
      label: 'Steps Taken',
      data: user.activity.getWeeklyStepCount(today),
      backgroundColor: [
        '#A9B9FC',
        '#C3A9FC',
        '#ECA9FC',
        '#FCA9E3',
        '#FCA9B9',
        '#FCC3A9',
        '#FCEDA9'
      ],
    }]
  },
  options: {
    legend: {
      onClick: null,
      labels: {
        boxWidth: 0,
        fontSize: 20,
      }
    },
  }
});
const weeklyFlightsChart = new Chart(weeklyStairs, {
  type: 'bar',
  data: {
    labels: week,
    datasets: [{
      label: 'Flights Climbed',
      data: user.activity.getWeeklyStairsClimbed(today),
      backgroundColor: [
        '#A9B9FC',
        '#C3A9FC',
        '#ECA9FC',
        '#FCA9E3',
        '#FCA9B9',
        '#FCC3A9',
        '#FCEDA9'
      ],
    }]
  },
  options: {
    legend: {
      onClick: null,
      labels: {
        boxWidth: 0,
        fontSize: 20,
      }
    }
  }
});

const weeklyMinutesChart = new Chart(weeklyMinutes, {
  type: 'bar',
  data: {
    labels: week,
    datasets: [{
      label: 'Minutes Active',
      data: user.activity.getWeeklyMinutesActive(today),
      backgroundColor: [
        '#A9B9FC',
        '#C3A9FC',
        '#ECA9FC',
        '#FCA9E3',
        '#FCA9B9',
        '#FCC3A9',
        '#FCEDA9'
      ],
    }]
  },
  options: {
    legend: {
      onClick: null,
      labels: {
        boxWidth: 0,
        fontSize: 20,
      }
    }
  }
});

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
