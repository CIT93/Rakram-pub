/*
function determineHouseHoldPts(numberInHousehold) {
if(numberInHousehold === 1) {
    CarbonFootprintPoints = CarbonFootprintPoints + 14;
} else if(numberInHousehold === 2) {
    CarbonFootprintPoints = CarbonFootprintPoints + 12;
} else if(numberInHousehold === 3) {
    CarbonFootprintPoints = CarbonFootprintPoints + 10;
} else if(numberInHousehold === 4) {
    CarbonFootprintPoints = CarbonFootprintPoints + 8;
} else if(numberInHousehold === 5) {
    CarbonFootprintPoints = CarbonFootprintPoints + 6;
} else if(numberInHousehold === 6) {
    CarbonFootprintPoints = CarbonFootprintPoints + 4;
} else if(numberInHousehold > 6) {
    CarbonFootprintPoints = CarbonFootprintPoints + 2; 
}
console.log(`Based on the number of members in the household of ${numberInHousehold} the points would be ${cardonFootprintPoints}.`);
}

let CarbonFootprintPoints = 0;
//const numberInHousehold = 3;

determineHouseHoldPts(3)
determineHouseHoldPts(4)

*/
// If you have large house, then add 10 points to your score.
// If you have medium-sized house, then add 7 points.
// If you have small house, then add 4 points.
// IF you live in an apartment, then add 2 points.

function determineHousesizePts(houseSize) {
if(Housesize === "Largehousesize") {
    cardonFootprintPoints = CarbonFootprintPoints + 10;
} else if(housesize === "Mediumsizehouse") {
    cardonFootprintPoints = cardonFootprintPoints + 7;
} else if(Housesize === "Smallsizehouse") {
    cardonFootprintPoints = cardonFootprintPoints + 4;
} else if(Housesize === "Apartmentsize") {
    cardonFootprintPoints = cardonFootprintPoints + 2;
}
 console.log(`Based on the house size of ${housesize} the total points would be ${carbonFootprintPoints}.`);{

 }


 findingHousesize("apartment")
