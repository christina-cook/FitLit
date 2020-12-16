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
const dailyHydration = document.querySelector('.daily-hydration');
const averageHydration = document.querySelector('.average-hydration');
const weeklyHydration = document.querySelector('.hydration-chart').getContext('2d');

const sleepDashboard = document.querySelector('.sleep-dashboard');
const hoursSlept = document.querySelector('.hours-slept');
const sleepQuality = document.querySelector('.sleep-quality');
const weeklyHoursSlept = document.querySelector('.weekly-hours-chart').getContext('2d');
const weeklySleepQuality = document.querySelector('.weekly-quality-chart').getContext('2d');

const activityDashboard = document.querySelector('.activity-dashboard');
const weeklySteps = document.querySelector('.weekly-steps-chart').getContext('2d');
const weeklyStairs = document.querySelector('.weekly-flights-chart').getContext('2d');
const weeklyMinutes = document.querySelector('.weekly-minutes-chart').getContext('2d');
const dailySteps = document.querySelector('.daily-steps');
const dailyMinutes = document.querySelector('.daily-minutes');
const dailyDistance = document.querySelector('.daily-distance');
const dailyFlights = document.querySelector('.daily-flights');

welcomeMessage.innerText = `Welcome ${user.returnFirstName()}!`;
userInfo.innerText = `${user.address}\n${user.email}`;
stepGoalCompare.innerText = `Your step goal is ${user.dailyStepGoal} steps per day.\nThe average goal is ${userRepository.averageStepGoal()} steps per day.`

dailyHydration.innerText = `You've drank ${user.hydration.getDailyOz(today)}oz of water today\nOn average you drink ${user.hydration.getAverageOz()}oz per day`;

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


hoursSlept.innerText = `Last night you slept ${user.sleep.getDailyHrsSlept(today)} hours\nYour average is ${user.sleep.getAverageHrsSlept()} hours`;
sleepQuality.innerText = `Your quality of sleep last night was ${user.sleep.getDailySleepQuality(today)}/5\nYour average is ${user.sleep.getAverageSleepQuality()}/5`;

hydrationButton.addEventListener('click', toggleHydration);
sleepButton.addEventListener('click', toggleSleep);
activityButton.addEventListener('click', toggleActivity);
backButton.addEventListener('click', toggleBack);

dailySteps.innerText = `Steps today: ${user.activity.getDailySteps(today)}\nUser average: ${userRepository.getDailyAverageSteps(today)}`;
dailyMinutes.innerText = `Minutes Active today: ${user.activity.getDailyMinutesActive(today)}\nUser average: ${userRepository.getDailyAverageMinutes(today)}`;
dailyDistance.innerText = `Miles Walked today: ${user.getDailyMilesWalked(today)}`;
dailyFlights.innerText = `Flights climbed today: ${user.activity.getDailyStairsClimbed(today)}\nUser average: ${userRepository.getDailyAverageStairs(today)}`
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
