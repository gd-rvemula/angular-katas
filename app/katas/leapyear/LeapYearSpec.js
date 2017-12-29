describe('LeapYear', function() {

    it('return false when the year is 1', function() {
        expect(LeapYear(1)).toBe(false);
    });

    it('should return true when the year is 4', function() {
        expect(LeapYear(4)).toBe(true);
    });

    it('should return true when the year is 8', function() {
        expect(LeapYear(8)).toBe(true);
    });

    it('should return false when the year is 100', function() {
        expect(LeapYear(100)).toBe(false);
    });

    it('should return false when the year is 200', function() {
        expect(LeapYear(200)).toBe(false);
    });

    it('should return false when the year is 300', function() {
        expect(LeapYear(300)).toBe(false);
    });

    it('should return false when the year is 400', function() {
        expect(LeapYear(400)).toBe(true);
    });
    
    it('should return false when the year is 800', function() {
        expect(LeapYear(800)).toBe(true);
    });
});
