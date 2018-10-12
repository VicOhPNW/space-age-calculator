// let anchorDate = new Date();

export class spaceAgeCalculator {
  constructor(currentAge, ageOfDeath) {
    this.currentAge = currentAge;
    this.ageOfDeath = ageOfDeath;
  }

  calculateMercuryAge() {
    const mercuryYears = 0.24;
    let mercuryAge = Math.floor(this.currentAge * mercuryYears);
    return mercuryAge;
  }

  calculateVenusAge() {
    const venusYears = 0.62;
    let venusAge = Math.floor(this.currentAge * venusYears);
    return venusAge;
  }

  calculateMarsAge() {
    const venusYears = 1.88;
    let marsAge = Math.floor(this.currentAge * venusYears);
    return marsAge;
  }
}
