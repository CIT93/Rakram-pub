// function to measure Housesize
const determineHouseSizePts = (size = "Large") =>{
  
    let houseSizePoints = 0;
    if (size === "large") {
        houseSizePoints = 10;
    } else if (size === "medium") {
        houseSizePoints = 7;
    } else if (size === "small") {
        houseSizePoints = 4;
    } else if (size === "apt") {
        houseSizePoints = 2;
    } 
    return houseSizePoints;
};
 
const determineHouseholdnumbers = (numberInHousehold =3) => {
  let houseHoldpoints = 0; 
  if (numberInHousehold === 1) {
    houseHoldpoints = 14;
  } else if (numberInHousehold === 2) {
    houseHoldpoints = 12;
  } else if (numberInHousehold === 3) {
   houseHoldpoints = 10;
  } else if (numberInHousehold === 4) {
    houseHoldpoints = 8;
  } else if (numberInHousehold === 5) {
    houseHoldpoints = 6;
  } else if (numberInHousehold === 6) {
   houseHoldpoints = 4;
  } else if (numberInHousehold > 6) {
   houseHoldpoints = 2;
  }
    return houseHoldpoints
}


export {determineHouseholdnumbers, determineHouseSizePts}