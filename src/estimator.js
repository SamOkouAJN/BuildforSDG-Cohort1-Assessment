/* eslint-disable no-undef */
const covid19ImpactEstimator = (data) => {
  const input = data;
  return {
    data: input,
    impact: {
      currentlyinfected: data.reportedCases * 10,
      infectionsByRequestedTime: currentlyinfected * 1024
    },
    severeImpact: {
      currentlyinfected: data.reportedCases * 50
    }
  };
};

export default covid19ImpactEstimator;
