import { spaceAgeCalculator } from '../src/spaceAgeCalc.js';

//test for converting age
describe('calculateMercuryAge', function() {
    it('should calculate and return the age in Mercury years', function() {
      let test = new spaceAgeCalculator(35, "male");
      expect(test.calculateMercuryAge()).toEqual(145);

      let test2 = new spaceAgeCalculator(100, "female");
      expect(test2.calculateMercuryAge()).toEqual(416);
    });
});

describe('calculateVenusAge', function() {
    it('should calculate and return the age in Venus years', function() {
      let test = new spaceAgeCalculator(35, "male");
      expect(test.calculateVenusAge()).toEqual(56);

      let test2 = new spaceAgeCalculator(100, "female");
      expect(test2.calculateVenusAge()).toEqual(161);
    });
});

describe('calculateMarsAge', function() {
    it('should calculate and return the age in Mars years', function() {
      let test = new spaceAgeCalculator(35, "male");
      expect(test.calculateMarsAge()).toEqual(18);

      let test2 = new spaceAgeCalculator(100, "female");
      expect(test2.calculateMarsAge()).toEqual(53);
    });
});

describe('calculateJupiterAge', function() {
    it('should calculate and return the age in Jupiter years', function() {
      let test = new spaceAgeCalculator(35, "male");
      expect(test.calculateJupiterAge()).toEqual(2);

      let test2 = new spaceAgeCalculator(100, "female");
      expect(test2.calculateJupiterAge()).toEqual(8);
    });
});

//tests for converting life expectancy
describe('lifeExpectancyMercury', function() {
    it('should calculate and return the average life expectancy in Mercury', function() {
      let test = new spaceAgeCalculator(35, "male");
      expect(test.lifeExpectancyMercury()).toEqual(316);

      let test2 = new spaceAgeCalculator(100, "female");
      expect(test2.lifeExpectancyMercury()).toEqual(337);
    });
});

describe('lifeExpectancyVenus', function() {
    it('should calculate and return the average life expectancy in Mercury', function() {
      let test = new spaceAgeCalculator(35, "male");
      expect(test.lifeExpectancyVenus()).toEqual(122);

      let test2 = new spaceAgeCalculator(100, "female");
      expect(test2.lifeExpectancyVenus()).toEqual(130);
    });
});

describe('lifeExpectancyMars', function() {
    it('should calculate and return the average life expectancy in Mercury', function() {
      let test = new spaceAgeCalculator(35, "male");
      expect(test.lifeExpectancyMars()).toEqual(40);

      let test2 = new spaceAgeCalculator(100, "female");
      expect(test2.lifeExpectancyMars()).toEqual(43);
    });
});

describe('lifeExpectancyJupiter', function() {
    it('should calculate and return the average life expectancy in Mercury', function() {
      let test = new spaceAgeCalculator(35, "male");
      expect(test.lifeExpectancyJupiter()).toEqual(6);

      let test2 = new spaceAgeCalculator(100, "female");
      expect(test2.lifeExpectancyJupiter()).toEqual(6);
    });
});

//test for remaining years
describe('remainingYearsMercury', function() {
    it('should return remaining years left', function() {
      let test = new spaceAgeCalculator(35, "male");
      expect(test.remainingYearsMercury()).toEqual('You have ${yearsLeftMercury} years left on Mercury.');

      let test2 = new spaceAgeCalculator(100, "female");
      expect(test2.remainingYearsMercury()).toEqual('You have lived Math.abs(${yearsLeftMercury}) years beyond expectancy.');
    });
});

describe('remainingYearsVenus', function() {
    it('should return remaining years left', function() {
      let test = new spaceAgeCalculator(35, "male");
      expect(test.remainingYearsVenus()).toEqual('You have ${yearsLeftVenus} years left on Mercury.');

      let test2 = new spaceAgeCalculator(100, "female");
      expect(test2.remainingYearsVenus()).toEqual('You have lived Math.abs(${yearsLeftVenus}) years beyond expectancy.');
    });
});

describe('remainingYearsMars', function() {
    it('should return remaining years left', function() {
      let test = new spaceAgeCalculator(35, "male");
      expect(test.remainingYearsMars()).toEqual('You have ${yearsLeftMars} years left on Mercury.');

      let test2 = new spaceAgeCalculator(100, "female");
      expect(test2.remainingYearsMars()).toEqual('You have lived Math.abs(${yearsLeftMars}) years beyond expectancy.');
    });
});

describe('remainingYearsJupiter', function() {
    it('should return remaining years left', function() {
      let test = new spaceAgeCalculator(35, "male");
      expect(test.remainingYearsJupiter()).toEqual('You have ${yearsLeftJupiter} years left on Mercury.');

      let test2 = new spaceAgeCalculator(100, "female");
      expect(test2.remainingYearsJupiter()).toEqual('You have lived Math.abs(${yearsLeftJupiter}) years beyond expectancy.');
    });
});
