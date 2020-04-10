/* eslint-disable no-undef */
const covid19ImpactEstimator = () => {
  const result = [];
  const data = [{

    region: {
      name: 'Africa',
      avgAge: 19.7,
      avgDailyIncomeInUSD: 5,
      avgDailyIncomePopulation: 0.71
    },
    periodType: 'days',
    timeToElapse: 58,
    reportedCases: 674,
    population: 66622705,
    totalHospitalBeds: 1380614
  }];
  for (let x = 0; x < data.length; x += 1) {
    result.push({
      data,
      Impact: [{
        currentlyInfected: data[x].reportedCases * 20
      }],
      severeImpact: [{
        currentlyInfected: data[x].reportedCases * 50
      }]
    });
  }
  const arr = { ...result };
  return arr;
};

export default covid19ImpactEstimator;
