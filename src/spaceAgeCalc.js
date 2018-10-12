// let anchorDate = new Date();
const mercuryYears = 0.24;
const venusYears = 0.62;
const marsYears = 1.88;
const jupiterYears = 11.86;

export class spaceAgeCalculator {
  constructor(currentAge, ageOfDeath) {
    this.currentAge = currentAge;
    this.ageOfDeath = ageOfDeath;
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

  remainingYearsMercury() {
    let deathAgeMercury = Math.floor(this.ageOfDeath / mercuryYears);
    let yearsLeftMercury = deathAgeMercury - this.calculateMercuryAge();
    return yearsLeftMercury;
  }

  remainingYearsVenus() {
    let deathAgeVenus = Math.floor(this.ageOfDeath / venusYears);
    let yearsLeftVenus = deathAgeVenus - this.calculateVenusAge();
    return yearsLeftVenus;
  }

  remainingYearsMars() {
    let deathAgeMars = Math.floor(this.ageOfDeath / marsYears);
    let yearsLeftMars = deathAgeMars - this.calculateMarsAge();
    return yearsLeftMars;
  }

  remainingYearsJupiter() {
    let deathAgeJupiter = Math.floor(this.ageOfDeath / jupiterYears);
    let yearsLeftJupiter = deathAgeJupiter - this.calculateJupiterAge();
    return yearsLeftJupiter;
  }
}


// const mercuryYears = 0.24;
// const venusYears = 0.62;
// const marsYears = 1.88;
// const jupiterYears = 11.86;
