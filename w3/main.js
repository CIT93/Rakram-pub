function determineHouseHoldPts() {
    console.log("Inside the function")
}

let CarbonFootprintPoints = 0;
const numberInHousehold = 3;

if (numberInHousehold === 1) {
    CarbonFootprintPoints = CarbonFootprintPoints + 14;
} else if(numberInHousehold === 2) {
    CarbonFootprintPoints = CarbonFootprintPoints + 12;
} else if(numberInHousehold === 3) {
    CarbonFootprintPoints = CarbonFootprintPoints + 10;
} else if(numberInHousehold === 4) {
    CarbonFootprintPoints = CarbonFootprintPoints + 8;
} else if(numberInHousehold === 5) {
    CarbonFootprintPoints = CarbonFootprintPoints + 6;
} esle if(numberInHousehold === 6) {
    CarbonFootprintPoints = CarbonFootprintPoints + 4;
} else if(numberInHousehold > 6) {
    CarbonFootprintPoints = CarbonFootprintPoints + 2; 
}
console.log(`Based on the number of members in household of ${numberInHousehold} the points would be ${cardonFootprintPoints}.`); 

cl


// global scope