function determineHouseHoldPts() {
    console.log("Inside the function")
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
} else if(numberInHousehold === 6) {
    CarbonFootprintPoints = CarbonFootprintPoints + 4;
} else if(numberInHousehold > 6) {
    CarbonFootprintPoints = CarbonFootprintPoints + 2; 
}
console.log(`Based on the number of members in the household of ${numberInHousehold} the points would be ${cardonFootprintPoints}.`);
}

let CarbonFootprintPoints = 0;
const numberInHousehold = 3;


//global scope

determineHouseHoldPts(3)
determineHouseHoldPts(4)

if (Housesize === "Largehousesize") {
    cardonFootprintPoints = CarbonFootprintPoints + 10;
} else if(housesize === "Mediumsizehouse") {
    cardonFootprintPoints = cardonFootprintPoints + 7;
} else if(Housesize === "Smallsizehouse") {
    cardonFootprintPoints = cardonFootprintPoints + 4;
} else if(Housesize === "Apartmentsize") {
    cardonFootprintPoints = cardonFootprintPoints + 2;
}
   





