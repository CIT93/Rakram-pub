const CFPDATA = [];

function determineHouseSizePts(size) {
    console.log("inside block scope");
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
}

function determineHouseholdnumbers(numberInHousehold) {
  let houseHoldpoints = 0;
  if (numberInHousehold === 1) {
    houseHoldPoints = 14;
  } else if (numberInHousehold === 2) {
    houseHoldPoints = 12;
  } else if (numberInHousehold === 3) {
   houseHoldPoints = 10;
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

function start(houseHoldMembers, houseSize) {
    const householdPts =  determineHouseholdnumbers(houseHoldMembers);
    const householdsize = determineHouseSizePts(houseSize);
    const total = householdsize + householdPts;
    CFPDATA.push([houseHoldMembers, houseSize, householdPts, houseSize, total])
  }

  function displayOutput() {

  }

    start(5, "apt");
    start(4, "large");
    start(3, "meduim");
    start(2, "small");

    displayOutput()
    
    



