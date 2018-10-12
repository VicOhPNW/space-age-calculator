import { spaceAgeCalculator } from '../src/spaceAgeCalc.js';

describe('calculateMercuryAge', function() {
    it('should calculate and return the age in Mercury years', function() {
      let test = new spaceAgeCalculator(35, 100);
      expect(test.calculateMercuryAge()).toEqual(8);

      let test2 = new spaceAgeCalculator(100, 100);
      expect(test2.calculateMercuryAge()).toEqual(24);
    });
});

describe('calculateVenusAge', function() {
    it('should calculate and return the age in Venus years', function() {
      let test = new spaceAgeCalculator(35, 100);
      expect(test.calculateVenusAge()).toEqual(21);

      let test2 = new spaceAgeCalculator(100, 100);
      expect(test2.calculateVenusAge()).toEqual(62);
    });
});

describe('calculateMarsAge', function() {
    it('should calculate and return the age in Mars years', function() {
      let test = new spaceAgeCalculator(35, 100);
      expect(test.calculateMarsAge()).toEqual(65);

      let test2 = new spaceAgeCalculator(100, 100);
      expect(test2.calculateMarsAge()).toEqual(188);
    });
});

describe('calculateJupiterAge', function() {
    it('should calculate and return the age in Jupiter years', function() {
      let test = new spaceAgeCalculator(35, 100);
      expect(test.calculateJupiterAge()).toEqual(415);

      let test2 = new spaceAgeCalculator(100, 100);
      expect(test2.calculateJupiterAge()).toEqual(1186);
    });
});
