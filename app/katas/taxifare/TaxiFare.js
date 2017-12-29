'use strict';

angular.module('myApp').factory('TaxiFareService', [function() {
    var distance = 0;
    var travelTime = 0;
    var taxiSpeed = 0;
    var rate = 0;

    var setDistance = function(dist) {
        distance = dist;
    };

    var setTravelTime = function(travTime) {
        travelTime = travTime;
    };

    var calculateCostForRate = function(ratePerMile) {
        return distance * ratePerMile;
    };
    
    var setVelocity = function(velocity) {
        taxiSpeed = velocity;
    };
    
    var canItMakeIt = function(velocity) {
        return distance/velocity <= travelTime;
    };
    
    var setRate = function(travRate) {
        rate = travRate;
    }
    
    var getTaxiFare = function(travDistance, travTime, walkingVelocity) {
        distance = travDistance;
        travelTime = travTime;
        var result;
        if (canItMakeIt(walkingVelocity)) {
            result = '0.00';
        }
        else if(canItMakeIt(taxiSpeed)) {
            result = calculateCostForRate(rate).toFixed(2).toString()
        }
        else{
            result = 'Won\'t make it!';
        }
        
        return result;
    }

    return {
        setRate: setRate,
        calculateCostForRate: calculateCostForRate,
        getTaxiFare: getTaxiFare,
        setTravelTime: setTravelTime,
        setDistance: setDistance,
        setVelocity: setVelocity
    };
}]);