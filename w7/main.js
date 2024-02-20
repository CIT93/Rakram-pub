import { renderTbl} from "./render.js";

const FORM = document.getElementById("form");
const OUTPUT = document.getElementById("output");
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

function start (firstName, lastName, houseHoldMembers, houseSize) {
    const householdPts =  determineHouseholdnumbers(houseHoldMembers);
    const householdsize = determineHouseSizePts(houseSize);
    const total = householdsize + householdPts;

cfpData.push({
  houseM: houseHoldMembers,
  houseS: houseSize,
  houseMPTS: householdPts,
  houseSPTS: householdsize,
  cfpTotal: total
});

//displayOutObj(cfpObj);

}
 


document.querySelector('#form').addEventListener('submit', function(e) {
  e.preventDefault();
  const firstName = FORM.firstname.value;
  const lastName = FORM.lastname.value;
  const houseMembers = parseInt(FORM.housem.value);
  const houseSize = FORM.houses.value;
  start(firstName, lastName, houseMembers,houseSize);
  OUTPUT.innerHTML = "";
  //displayOutput();
  renderTbl(cfpData);
  FORM.reset();
})

// yes the apartment score is correct. 
// we are doing these to make sure user give us good data.
// i updated my coding challange and now longer needed to update. 
// about modules i dont have questions but this was hard for me and go throught my mind
