/* eslint-disable no-undef */
const covid19ImpactEstimator = (data) => {
  const input = data;
  return {
    data: input,
    impact: {
      currentlyinfected: input.reportedCases * 10,
      infectionsByRequestedTime: input.reportedCases * 1024
    },
    severeImpact: {
      currentlyinfected: input.reportedCases * 50,
      infectionsByRequestedTime: input.reportedCases * 1024
    }
  };
};

export default covid19ImpactEstimator;
