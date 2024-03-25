import{ renderTbl} from "./render.js";
import { determineHouseholdnumbers, determineHouseSizePts } from "./cfp.js";
import {FORM} from "./global.js";
import { saveLs, cfpData } from "./storage.js";

const firstNameEl = document.getElementById('firstName');
const lastNameEl = document.getElementById('lastName');
const submitEl = document.getElementById("submitError");

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
 
renderTbl[cfpData];

function validatefield(event) {
  const field = event.target.value;
  const fieldId = event.target.id;
  const fieldError = document.getElementById(`$ (fieldId)Error`);
  if (field === '') {
    fieldError.textContent = `${fieldId} is required`;
    event.target.classList.add('invalid');
} else {
    fieldError.textContent = '';
    event.target.classList.remove('invalid');
 
  }
}
 
  // Attach blar event listeners
  firstNameEl.addEventListener('blur',validatefield);
  lastNameEl.addEventListener('blur', validatefield);


FORM.addEventListener('submit', function(e) {
  e.preventDefault();
  const firstName = FORM.firstname.value;
  const lastName = FORM.lastname.value;
  const firstNameIsvalid = firstNameEl.value !== '';
  const lastNameIsvalid = lastNameEl.value !== '';
  if (firstNameIsvalid && lastNameIsvalid) {
    submitEl.classList.remove("invalid");
    const houseHoldMembers = parseInt[FORM.housem.value];
    const houseSize =FORM.houses.value;
  start(firstName, lastName, houseMembers,houseSize);
  saveLs(cfpData);
  renderTbl(cfpData);
  FORM.reset();
} else {
  const submitEl = document.getElementById("submitError");
  submitEl.textContent = "Form requires first name and last name";
}

})