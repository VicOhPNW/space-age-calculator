const mercuryYears = 0.24;
const venusYears = 0.62;
const marsYears = 1.88;
const jupiterYears = 11.86;
const avgLifeExpectancy = {
  "male": 76,
  "female": 81
};


export class spaceAgeCalculator {
  constructor(currentAge, gender) {
    this.currentAge = currentAge;
    this.gender = gender;
  }

  calculateMercuryAge() {
    let mercuryAge = Math.floor(this.currentAge / mercuryYears);
    return mercuryAge;
  }

  calculateVenusAge() {
    let venusAge = Math.floor(this.currentAge / venusYears);
    return venusAge;
  }

  calculateMarsAge() {
    let marsAge = Math.floor(this.currentAge / marsYears);
    return marsAge;
  }

  calculateJupiterAge() {
    let jupiterAge = Math.floor(this.currentAge / jupiterYears);
    return jupiterAge;
  }

  lifeExpectancyMercury() {
    let avgLifeMercury = Math.floor(avgLifeExpectancy[this.gender] / mercuryYears);
    return avgLifeMercury;
  }

  lifeExpectancyVenus() {
    let avgLifeVenus = Math.floor(avgLifeExpectancy[this.gender] / venusYears);
    return avgLifeVenus;
  }

  lifeExpectancyMars() {
    let avgLifeMars = Math.floor(avgLifeExpectancy[this.gender] / marsYears);
    return avgLifeMars;
  }

  lifeExpectancyJupiter() {
    let avgLifeJupiter = Math.floor(avgLifeExpectancy[this.gender] / jupiterYears);
    return avgLifeJupiter;
  }

  remainingYearsMercury() {
    let yearsLeftMercury = this.lifeExpectancyMercury() - this.calculateMercuryAge();
    return yearsLeftMercury;
  }

  remainingYearsVenus() {
    let yearsLeftVenus = this.lifeExpectancyVenus() - this.calculateVenusAge();
    return yearsLeftVenus;
  }

  remainingYearsMars() {
    let yearsLeftMars = this.lifeExpectancyMars() - this.calculateMarsAge();
    return yearsLeftMars;
  }

  remainingYearsJupiter() {
    let yearsLeftJupiter = this.lifeExpectancyJupiter() - this.calculateJupiterAge();
    return yearsLeftJupiter;
  }
}


// const mercuryYears = 0.24;
// const venusYears = 0.62;
// const marsYears = 1.88;
// const jupiterYears = 11.86;
