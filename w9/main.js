import{ renderTbl} from "./render.js";
import { determineHouseholdnumbers, determineHouseSizePts } from "./cfp.js";
import {FORM} from "./global.js";
import { saveLs, cfpData } from "./storage.js";


function start ( first, last, houseHoldMembers, houseSize) {
    const householdPts =  determineHouseholdnumbers(houseHoldMembers);
    const householdsize = determineHouseSizePts(houseSize);
    const total = householdsize + householdPts;

cfpData.push({
  firstName: first,
  lastName: last,
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
  if (firstName === "" || firstName === null || lastName === "" || lastName === null) {
    messages.push("Name is Required!")
  } if (messages.length > 0){
    document.getElementById("error").textContent = messages.join(",") //Display warning messages
    return;
  }

  
  const houseMembers = parseInt(FORM.housem.value);
  const houseSize = FORM.houses.value;
  start(firstName, lastName, houseMembers,houseSize);
  saveLs(cfpData);
  renderTbl(cfpData);
  FORM.reset();
})

