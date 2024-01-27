function determineHouseholdPts() {
    console.log("Inside the function");
    if (numberInHousehold === 1) {
        cardonFootprintPoints = cardonFootprintPoints + 14;
    } else if (numberInHousehold === 2) {
        cardonFootprintPoints = cardonFootprintPoints + 12;
    } else if (numberInHousehold === 3) {
        cardonFootprintPoints = cardonFootprintPoints + 10;
    } else if (numberInHousehold === 4) {
        cardonFootprintPoints = cardonFootprintPoints + 8;
    } else if (numberInHousehold === 5) {
        cardonFootprintPoints = cardonFootprintPoints + 6;
    } else if (numberInHousehold === 6) {
        cardonFootprintPoints = cardonFootprintPoints + 4;
    } else if (numberInHousehold > 6) {
        cardonFootprintPoints = cardonFootprintPoints + 2;
    }
    console.log(`Based on the number of members in the household of ${numberInHousehold} the points would be ${cardonFootprintPoints}.`)
 }

let cardonFootprintPoints = 0;
//const numberInHousehold = 3;


// global scope 

determineHouseholdPts()
determineHouseholdPts()