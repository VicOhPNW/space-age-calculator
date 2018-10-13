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

//convert earth age to respective planet age
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

//convert earth life expectancy age to respective planet's
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

//calculate remaining years
  remainingYearsMercury() {
    let yearsLeftMercury = this.lifeExpectancyMercury() - this.calculateMercuryAge();
    if (yearsLeftMercury === 0) {
      return "Watch out, death is coming for you.";
    } else if (yearsLeftMercury > 0) {
      return 'You have ${yearsLeftMercury} years left on Mercury.';
    } else {
      return 'You have lived Math.abs(${yearsLeftMercury}) years beyond expectancy.';
    }
  }

  remainingYearsVenus() {
    let yearsLeftVenus = this.lifeExpectancyVenus() - this.calculateVenusAge();
    if (yearsLeftVenus === 0) {
      return "Watch out, death is coming for you.";
    } else if (yearsLeftVenus > 0) {
      return 'You have ${yearsLeftVenus} years left on Mercury.';
    } else {
      return 'You have lived Math.abs(${yearsLeftVenus}) years beyond expectancy.';
    }
  }

  remainingYearsMars() {
    let yearsLeftMars = this.lifeExpectancyMars() - this.calculateMarsAge();
    if (yearsLeftMars === 0) {
      return "Watch out, death is coming for you.";
    } else if (yearsLeftMars > 0) {
      return 'You have ${yearsLeftMars} years left on Mercury.';
    } else {
      return 'You have lived Math.abs(${yearsLeftMars}) years beyond expectancy.';
    }
  }

  remainingYearsJupiter() {
    let yearsLeftJupiter = this.lifeExpectancyJupiter() - this.calculateJupiterAge();
    if (yearsLeftJupiter === 0) {
      return "Watch out, death is coming for you.";
    } else if (yearsLeftJupiter > 0) {
      return 'You have ${yearsLeftJupiter} years left on Mercury.';
    } else {
      return 'You have lived Math.abs(${yearsLeftJupiter}) years beyond expectancy.';
    }
  }
}
