 describe('Sum of digits in a row', function() {
     it('if sting is empty should return false', function() {
        expect(checkStr("")).toBe(false);
     });

     it('if digits are negative should be correct', function() {
        expect(checkStr("-3+3-5+5-4+2")).toBe(-2);
     });

     it('if there are no digits should return false', function() {
        expect(checkStr("gsagsagbcxbdfafsaf")).toBe(false);
     });
 });

describe('Pin-Code', function() {

      it('If <=2 incorrect PIN code entries next correct PIN should return true', function() {
        expect(checkPinCode(111)).toBe(false);
        expect(checkPinCode(111)).toBe(false);
        expect(checkPinCode(555)).toBe(true);
     });  

     it('If >3 incorrect PIN code entries next correct PIN should return false', function() {
        expect(checkPinCode(111)).toBe(false);
        expect(checkPinCode(111)).toBe(false);
        expect(checkPinCode(111)).toBe(false);
        expect(checkPinCode(555)).toBe(false);
     });
 });

describe('Clock', function() {

      it('3:0:15 should return 7.5 97.5 90', function() {
        expect(degrees(3, 15, 0)).toBe(7.5 + "\n" + 97.5 + "\n" + 90);

     });  
 });

describe('Automorphic numbers', function() {

      it('Automorphic sum of 1000 numbers should be 1114', function() {
        expect(perfecSum(1000)).toBe(1114);

     });  
 });

