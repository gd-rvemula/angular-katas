/*global expect FizzBuzz*/
describe('FizzBuzz', function() {

  it('should return 1', function() {
    expect(FizzBuzz(1)).toBe('1');
    expect(FizzBuzz(2)).toBe('2');
  });

  it('should return Fizz', function() {
    expect(FizzBuzz(3)).toBe('Fizz');
    expect(FizzBuzz(6)).toBe('Fizz');
  });

  it('should return Buzz', function() {
    expect(FizzBuzz(5)).toBe('Buzz');
    expect(FizzBuzz(10)).toBe('Buzz');
  });

  it('should return FizzBuzz', function() {
    expect(FizzBuzz(15)).toBe('FizzBuzz');
    expect(FizzBuzz(30)).toBe('FizzBuzz');
  });



});
