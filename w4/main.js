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

function start(houseHoldMembers, houseSize) {
    const householdPts =  determineHouseholdnumbers(houseHoldMembers);
    const householdsize = determineHouseSizePts(houseSize);
    const total = householdsize + householdPts;
    CFPDATA.push([houseHoldMembers, houseSize, householdPts,householdsize, total]);

  }

  function displayOutput() {
   for (arr of CFPDATA) {
      const output = document.getElementById("output");
      const newh2 = document.createElement("h2");
      newh2.textContent = `Cardon Footprint total is ${arr[4]}`;
      const newh3 = document.createElement("h3");
      newh3.textContext = 'Based on number in and size of home'
      const neWP = document.createElement("p");
      neWP.textContent = `This number is based on the number of people in the house of ${arr[0]} (score:${arr[3]}),`;
      neWP.textContent += ` and a ${arr[1]} size of home (score:${arr[2]}).`;
      output.appendChild(newh2);
      output.appendChild(newh2);
      output.appendChild(neWP);
   } 
  }

    start(5, "apt");
    start(4, "large");
    start(3, "meduim");
    start(2, "small");


    displayOutput()
