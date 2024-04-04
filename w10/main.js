import{ renderTbl} from "./render.js";
import { determineHouseHoldPts, determineHouseSizePts } from "./cfp.js";
import {FORM, FNAME, LNAME,SUBMIT} from "./global.js";
import { saveLs, cfpData } from "./storage.js";

//const start =( first, last, houseHoldMembers, houseSize) => {
    //const householdPts = determineHouseHoldPts();
    //const houseSize = determineHouseSizePts ();
    //const total = houseSize + householdPts;
   // cfpData.push({
  //firstName: first,
  //lastName: last,
  //houseM: houseHoldMembers,
  //houseS: houseSize,
  //houseMPTS: householdPts,
  //houseSPTS: householdsize,
  //cfpTotal: total
  //});
//}

const start =( ...i) => {
  const householdPts = determineHouseHoldPts(i[2]);
  const houseSize = determineHouseSizePts (i[3]);
  const total = householdPts + houseSize;
  cfpData.push({
firstName:i[0],
lastName: i[1],
houseM: i[2],
houseS: i[3],
houseMPTS: householdPts,
houseSPTS: houseSize,
cfpTotal: total
});
}

 
renderTbl[cfpData];
// function to validate a single field
 const  validatefield = function (event) {
  const field = event.target.value;
  const fieldId = event.target.id;
  const fieldError = document.getElementById(`${fieldId}Error`);
  
  if (field === '') {
    fieldError.textContent = `${fieldId} is required`;
    event.target.classList.add(`invalid`);
} else {
    fieldError.textContent = '';
    event.target.classList.remove(`invalid`);

    }
  };
 
  // Attach blar event listeners
   FNAME.addEventListener('blur',validatefield);
  LNAME.addEventListener('blur', validatefield);


FORM.addEventListener('submit', function(e) {
  e.preventDefault();
  
  if (FNAME.value !== '' && LNAME.value !== '') {
    SUBMIT.textContent ='';
    start(FNAME.value, LNAME.value,  parseInt(FORM.housem.value), FORM.houses.value);
    saveLs(cfpData);
    renderTbl(cfpData);
  
  FORM.reset();
} else {
  
  SUBMIT.textContent = "Form requires first name and last name"
}
});

const add2 = function(...a) {
  return 2 + a[3];
}
const result = add2(1,2,3,4);

//spread argument

// IIFE

const a = 3;

(function(a) {
  console.log("inside IIFE");
  console.log(a);
}) (a);
