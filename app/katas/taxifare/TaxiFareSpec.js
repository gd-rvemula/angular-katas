describe('Service: TaxiFare', function() {

    var taxiFareService;

    beforeEach(module('myApp'));

    beforeEach(inject(function(TaxiFareService) {
        taxiFareService = TaxiFareService;
    }));

    it('should determine when the taxi will not make it on time', function() {
        taxiFareService.setVelocity(10);
        taxiFareService.setRate(2);

        expect(taxiFareService.getTaxiFare(10, 1)).not.toEqual('Won\'t make it!');
    });

    it('should return won\'t make it when the taxi will not make it', function() {
        taxiFareService.setVelocity(10);

        expect(taxiFareService.getTaxiFare(20, 1)).toEqual('Won\'t make it!');
    });

    it('should output price when the taxi will make it', function() {
        taxiFareService.setVelocity(10);
        taxiFareService.setRate(2);

        expect(taxiFareService.getTaxiFare(10, 1)).toEqual('20.00');
    });
    
    it('should output decimal price when the taxi will make it', function() {
        taxiFareService.setVelocity(10);
        taxiFareService.setRate(2);

        expect(taxiFareService.getTaxiFare(9.25, 1)).toEqual('18.50');
    });

    it('should output 0 if student can walk to destination and make it on time', function(){
        expect(taxiFareService.getTaxiFare(10, 10, 1)).toEqual('0.00');
    });

});