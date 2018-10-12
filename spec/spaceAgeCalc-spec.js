import { spaceAgeCalculator } from '../src/spaceAgeCalc.js';

describe('calculateMercuryAge', function() {
    it('should calculate and return the age in Mercury years', function() {
      let test = new spaceAgeCalculator(35, 100);
      expect(test.calculateMercuryAge()).toEqual(145);

      let test2 = new spaceAgeCalculator(100, 100);
      expect(test2.calculateMercuryAge()).toEqual(416);
    });
});

describe('calculateVenusAge', function() {
    it('should calculate and return the age in Venus years', function() {
      let test = new spaceAgeCalculator(35, 100);
      expect(test.calculateVenusAge()).toEqual(56);

      let test2 = new spaceAgeCalculator(100, 100);
      expect(test2.calculateVenusAge()).toEqual(161);
    });
});

describe('calculateMarsAge', function() {
    it('should calculate and return the age in Mars years', function() {
      let test = new spaceAgeCalculator(35, 100);
      expect(test.calculateMarsAge()).toEqual(18);

      let test2 = new spaceAgeCalculator(100, 100);
      expect(test2.calculateMarsAge()).toEqual(53);
    });
});

describe('calculateJupiterAge', function() {
    it('should calculate and return the age in Jupiter years', function() {
      let test = new spaceAgeCalculator(35, 100);
      expect(test.calculateJupiterAge()).toEqual(2);

      let test2 = new spaceAgeCalculator(100, 100);
      expect(test2.calculateJupiterAge()).toEqual(8);
    });
});

describe('remainingYearsMercury', function() {
    it('should return remaining years left', function() {
      let test = new spaceAgeCalculator(35, 100);
      expect(test.remainingYearsMercury()).toEqual(271);

      let test2 = new spaceAgeCalculator(100, 100);
      expect(test2.remainingYearsMercury()).toEqual(0);
    });
});

describe('remainingYearsVenus', function() {
    it('should return remaining years left', function() {
      let test = new spaceAgeCalculator(35, 100);
      expect(test.remainingYearsVenus()).toEqual(105);

      let test2 = new spaceAgeCalculator(100, 100);
      expect(test2.remainingYearsVenus()).toEqual(0);
    });
});

describe('remainingYearsJupiter', function() {
    it('should return remaining years left', function() {
      let test = new spaceAgeCalculator(35, 100);
      expect(test.remainingYearsJupiter()).toEqual(6);

      let test2 = new spaceAgeCalculator(100, 100);
      expect(test2.remainingYearsJupiter()).toEqual(0);
    });
});
