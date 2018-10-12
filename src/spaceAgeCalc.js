// let anchorDate = new Date();

export class spaceAgeCalculator {
  constructor(currentAge, ageOfDeath) {
    this.currentAge = currentAge;
    this.ageOfDeath = ageOfDeath;
  }

  calculateMercuryAge() {
    const mercuryYears = 0.24;
    let mercuryAge = Math.floor(this.currentAge * mercuryYears);
    console.log(mercuryAge);
    return mercuryAge;
  }

  calculateVenusAge() {
    const venusYears = 0.62;
    let venusAge = Math.floor(this.currentAge * venusYears);
    console.log(venusAge);
    return venusAge;
  }
}
