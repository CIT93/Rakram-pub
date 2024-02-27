import { determineHouseSizePts,determineHouseholdnumbers,displayOutObj} from "./module1.js";
import{ renderTbl,renderTBLHeading} from "./render.js";


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
