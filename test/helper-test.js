const chai = require('chai');
const expect = chai.expect;
const helper = require('../src/helper')
const getAverage = helper.getAverage
const getTargetDay = helper.getTargetDay
const getTargetWeek = helper.getTargetWeek

describe('Helprs', ()=> {
  let testData;
  beforeEach(() => {
    testData = [
      {
        "date": "2019/06/15",
        "number": 16
      },
      {
        "date": "2019/06/16",
        "number": 10
      },
      {
        "date": "2019/06/17",
        "number": 33
      },
      {
        "date": "2019/06/18",
        "number": 32
      },
      {
        "date": "2019/06/19",
        "number": 13
      },
      {
        "date": "2019/06/20",
        "number": 18
      },
      {
        "date": "2019/06/21",
        "number": 5
      },
      {
        "date": "2019/06/22",
        "number": 31
      }
    ]
  })

  it('Should calculate an average', () => {
    expect(Math.round(getAverage(testData, 'number'))).to.equal(20)
  })

  it('Should calculate a different average', () => {
    testData.pop()
    expect(Math.round(getAverage(testData, 'number'))).to.equal(18)
  })

  it('Should return a day', () => {
    expect(getTargetDay(testData, "2019/06/21")).to.eql({
      "date": "2019/06/21",
      "number": 5
    })
  })

  it('Should return a different day', () => {
    expect(getTargetDay(testData, "2019/06/20")).to.eql({
      "date": "2019/06/20",
      "number": 18
    })
  })

  it('Should return a week', () => {
    expect(getTargetWeek(testData, "2019/06/22")).to.eql([{
        "date": "2019/06/16",
        "number": 10
      },
      {
        "date": "2019/06/17",
        "number": 33
      },
      {
        "date": "2019/06/18",
        "number": 32
      },
      {
        "date": "2019/06/19",
        "number": 13
      },
      {
        "date": "2019/06/20",
        "number": 18
      },
      {
        "date": "2019/06/21",
        "number": 5
      },
      {
        "date": "2019/06/22",
        "number": 31
      }
    ])
  })

  it('Should return a different week', () => {
    expect(getTargetWeek(testData, "2019/06/21")).to.eql([
      {
        "date": "2019/06/15",
        "number": 16
      },
      {
        "date": "2019/06/16",
        "number": 10
      },
      {
        "date": "2019/06/17",
        "number": 33
      },
      {
        "date": "2019/06/18",
        "number": 32
      },
      {
        "date": "2019/06/19",
        "number": 13
      },
      {
        "date": "2019/06/20",
        "number": 18
      },
      {
        "date": "2019/06/21",
        "number": 5
      }
    ])
  })
})
