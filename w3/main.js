function determineHouseholdPts(numberInHousehold) {
console.log("Inside the function");
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
console.log(`Based on the number of members in the household of ${numberInHousehold} the points would be ${CarbonFootprintPoints}.`);
}

let CarbonFootprintPoints = 0;
//const numberInHousehold = 3;

determineHouseholdPts(3)
*/

/*
If you have a large house, then add 10 points to your score.
If you have a medium-sized house, then add 7 points.
If you have a small house, then add 4 ponits.
If you live in an apartment, then add 2 points.
*/





function findingHousesize(housesize) {
    let CarbonFootprintPoints = 0;

    if (housesize === "large house") {
        CarbonFootprintPoints = CarbonFootprintPoints + 10;
    } else if (housesize === "medium house") {
        CarbonFootprintPoints = CarbonFootprintPoints + 7;
    } else if (housesize === "small house") {
        CarbonFootprintPoints = CarbonFootprintPoints + 4;
    } else if (housesize === "apartment") {
        CarbonFootprintPoints = CarbonFootprintPoints + 2; 
    }
console.log(`Based on size of your ${housesize} the points would be ${CarbonFootprintPoints}`);

}


findingHousesize("APARTMENT")
determineHouseholdPts(3)
determineHouseholdPts(4)


