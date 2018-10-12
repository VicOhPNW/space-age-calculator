import { spaceAgeCalculator } from '../src/spaceAgeCalc.js';

describe('mercuryAge', function() {
    it('should calculate and return the age of Person in Mercury years', function() {
      let test = new spaceAgeCalculator(35, 100);
      expect(test.mercuryAge()).toEqual(8);

      let test = new spaceAgeCalculator(100, 100);
      expect(test.mercuryAge()).toEqual(24);
    });
});

// describe('mercuryAge', function() {
//     it('should calculate and return the age of Person in Mercury years', function() {
//       let test = new spaceAgeCalculator(35, 100);
//       console.log(test);
//         expect(test.mercuryAge()).toEqual(8);
//     });
// });
