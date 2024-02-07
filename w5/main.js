const cfpData = [];

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

function displayOutObj (Obj){
  console.log(Obj)
  const output = document.getElementById("output");
      const newH2 = document.createElement("h2");
      newH2.textContent = `Cardon Footprint ${Obj.mytotal}`;
      output.appendChild(newH2);
}

function start(houseHoldMembers, houseSize) {
    const householdPts =  determineHouseholdnumbers(houseHoldMembers);
    const householdsize = determineHouseSizePts(houseSize);
    const total = householdsize + householdPts;
// const cfpObj = ({
// houseHoldMembers: houseHoldMembers,
// houseSize : houseSize,
// householdPts : householdPts,
// householdsize : householdsize,
// mytotal: total
//}
cfpData.push({
  houseM: houseHoldMembers,
  houseS: houseSize,
  houseMPTS: householdPts,
  houseSPTS: houseSize,
  cfpTotal: total
});

//displayOutObj(cfpObj);

}
 
  function displayOutput() {
    for (obj of cfpData) {
      console.log(obj)
      const output = document.getElementById("output");
      const newH2 = document.createElement("h2");
      newH2.textContent = `Cardon Footprint ${obj.cfpTotal}`;
      const newH3 = document.createElement("h3");
      newH3.textContent = 'Based on number in and size of home'
      const newP = document.createElement("p");
      newP.textContent = `This number is based on the number of people in the house of ${obj.houseM} (score: ${obj.houseMPTS}).`;
      newP.textContent += `and a ${obj.houseS} size of home (score: ${obj.houseSPTS}).`;
      output.appendChild(newH2);
      output.appendChild(newH3);
      output.appendChild(newP);
    }
  }
 
  //function displayOutput() {
    //for (let i = 0; i < cfpData.length; i++) {
      //console.log(i)
      //const output = document.getElementById("output");
      //const newH2 = document.createElement("h2");
      //newH2.textContent = `Cardon Footprint ${cfpData[i][4]}`;
     // const newH3 = document.createElement("h3");
      //newH3.textContent = 'Based on number in and size of home'
      //const newP = document.createElement("p");
      //newP.textContent = `This number is based on the number of people in the house of ${arr[0]} (score: ${arr[3]}).`;
      //newP.textContent += `and a ${arr[1]} size of home (score: ${arr[2]}).`;
      //output.appendChild(newH2);
      //output.appendChild(newH3);
      //output.appendChild(newP);
    // }
   // }

    start(5, "apt");
    start(4, "large");
    start(3, "meduim");
    start(2, "small");

displayOutput()
