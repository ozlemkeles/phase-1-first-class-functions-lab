// Code your solution in this file!

const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0, 2);
} 

const returnLastTwoDrivers = function(){
    return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(integer){
    return function(fare){return fare * integer};
}

const fareDouble = createFareMultiplier(2);
const fareDoubler = function(fare){
    return fareDouble(fare);
}

const fareTriple = createFareMultiplier(3);
const fareTripler = function(fare){
    return fareTriple(fare);
};

function selectDifferentDrivers(drivers, returnDriversFunctions){
    if(returnDriversFunctions === returnFirstTwoDrivers){
        return returnFirstTwoDrivers(drivers);
    }
    else if(returnDriversFunctions === returnLastTwoDrivers){
        return returnLastTwoDrivers(drivers);
    }
}
