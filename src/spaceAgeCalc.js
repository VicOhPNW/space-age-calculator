// let anchorDate = new Date();

export class spaceAgeCalculator {
  constructor(currentAge, ageOfDeath) {
    this.currentAge = currentAge;
    this.ageOfDeath = ageOfDeath;
  }

  mercuryAge() {
    const mercuryYears = 0.24;
    let mercuryAge = Math.floor(this.currentAge * mercuryYears);
    return mercuryAge;
  }

  venusAge() {
    const venusYears = 0.62;
    let mercuryAge = Math.floor(this.currentAge * mercuryYears);
    return mercuryAge;
  }
}
