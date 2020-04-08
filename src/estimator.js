/* eslint-disable no-undef */
const covid19ImpactEstimator = (repostedCases) => ({
  impact: {
    currentlyInfected: repostedCases * 10
  },

  severeImpact: {
    currentlyInfected: repostedCases * 50
  },

  infectionsByRequestedTime: {

    impact: {
      currentlyInfected: currentlyInfected * 1024
    },
    severeImpact: {
      currentlyInfected: currentlyInfected * 1024
    }
  }

});


export default covid19ImpactEstimator;
