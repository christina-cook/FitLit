const formatChart = (title, data, week) => {
  return {
    type: 'bar',
    data: {
      labels: week,
      datasets: [{
        label: title,
        data,
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
  }
}
