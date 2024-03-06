import { renderTbl} from "./render.js";
import { determineHouseSizePts } from './cfp.js';

const FORM = document.getElementById("form");
const OUTPUT = document.getElementById("output");
const cfpData = [];

console.log("global scope");

function start (firstName, lastName, houseHoldMembers, houseSize) {
    const householdPts =  determineHouseSizePts(houseHoldMembers);
    const householdsize = determineHouseSizePts(houseSize);
    const total = householdsize + householdPts;
    cfpData.push({
      firstName: firstName,
      lastName: lastName,
      houseM: houseHoldMembers,
      houseS: houseSize,
      houseMPTS: householdPts,
      houseSPTS: householdsize,
      cfpTotal: total
});


}
 


FORM.addEventListener('submit', function(e){
e.preventDefault();
  const firstName = FORM.firstname.value;
  const lastName = FORM.lastname.value;
  const houseMembers = parseInt(FORM.housem.value);
  const houseSize = FORM.houses.value;
  start(firstName, lastName, houseMembers,houseSize);
  OUTPUT.innerHTML = "";
  renderTbl(cfpData);
  FORM.reset();
})

// I understand it and was helpful 

