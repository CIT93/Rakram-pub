import {renderTbl} from "./render.js";
import { determineHouseSizePts,determineHouseholdnumbers} from "./cfp.js"


const FORM = document.getElementById("form");
const OUTPUT = document.getElementById("output");
const cfpData = [];


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
}
 FORM.addEventListener('submit', function(e) {
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


