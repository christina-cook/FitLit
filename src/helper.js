const getAverage = (array, dataToAverage) => {
  sum = array.reduce((sum, data) => {
    return sum + data[dataToAverage];
  }, 0)

  return sum / array.length
};


const getTargetDay = (array, date) => {
  return array.find(data => data.date === date);
}

const getTargetWeek = (array, date) => {
  const day = getTargetDay(array, date);
  const dayIndex = array.indexOf(day)
  const week = array.filter((data, index) => {
    return (index <= dayIndex && index >= (dayIndex - 6));
  });

  return week
}

function getRandomIndex(array) {
  for (let i = 0; i < array.length; i++) {
  var randomIndex = array[Math.floor(Math.random() * array.length)];
  }
  return randomIndex;
};

if (typeof module !== 'undefined'){
  module.exports = {
    getAverage,
    getTargetDay,
    getTargetWeek
  }
}
