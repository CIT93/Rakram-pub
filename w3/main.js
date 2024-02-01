function determineHouseholdPts(numberInHousehold) {
   console.log("Inside the function")
   if (numberInHousehold === 1) {
    cardonFootprintPoint = cardonFootprintPoint + 14;
   } else if (numberInHousehold === 2) {
    cardonFootprintPoint = cardonFootprintPoint + 12;
   } else if (numberInHousehold === 3) {
    cardonFootprintPoint = cardonFootprintPoint + 10;
   } else if (numberInHousehold === 4) {
    cardonFootprintPoint = cardonFootprintPoint + 8;
   } else if (numberInHousehold === 5) {
    cardonFootprintPoint = cardonFootprintPoint + 6;
   } else if (numberInHousehold === 6) {
    cardonFootprintPoint = cardonFootprintPoint + 4;
   } else if (numberInHousehold > 6) {
    cardonFootprintPoint = cardonFootprintPoint + 2;
   }


function determineHouseholdPts(numberInHousehold) {
    if (size === "large") {
        cardonFootprintPoint = cardonFootprintPoint + 10;
       } else if (size === "meduim") {
        cardonFootprintPoint = cardonFootprintPoint + 7;
       } else if (size === "small") {
        cardonFootprintPoint = cardonFootprintPoint + 4;
       }
       else if (size === "apt") {
        cardonFootprintPoint = cardonFootprintPoint + 4;
       }
    }  

    console.log(
        `Based on the number of members in the household of ${numberInHousehold} the point would be ${cardonFootprintPoint}.`);
}

let cardonFootprintPoint = 0;

// global scope

determineHouseholdPts(5)
determineHouseholdPts("apt");

