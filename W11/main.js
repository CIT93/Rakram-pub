import{ renderTbl} from "./render.js";
import { determineHouseHoldPts, determineHouseSizePts } from "./cfp.js";
import {FORM, FNAME, LNAME,SUBMIT} from "./global.js";
import { saveLs, cfpData } from "./storage.js";
import { FP } from "./fp.js"

const start =( first, last, houseHoldMembers, houseSize) => {
    const householdPts = determineHouseHoldPts();
    const houseSizePts = determineHouseSizePts ();
    const total = houseSize + householdPts;
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
    //start(FNAME.value, LNAME.value,  parseInt(FORM.housem.value), FORM.houses.value);
    const fpObj = new FP(FNAME.value, LNAME.value, parseInt(FORM.housem.value), FORM.houses.value);
    //fpObj.houseHoldpoints();
    //fpObj.houseSizePoints();
   cfpData.push(fpObj)
    saveLs(cfpData);
    renderTbl(cfpData)
    FORM.reset();
} else {
  
  SUBMIT.textContent = "Form requires first name and last name"
 }
});

//const me = {
  //name: "Rabeeza",
  //hairColor: "Black",
  //location: "student",
  //SleepScore: 100,
  //introduction: function() {
    //console.log(this)
    //console.log(`this is ${this.name} with ${this.hairColor} hair color is in ${this.location} right now!`) 
 //}
//} 

//const you = {
  //name: "Jan",
  //hairColor: "Brown",
  //location: "Home",
  //SleepScore: 55,
  //introduction: function() {
   // console.log(this)
    //console.log(`this is ${this.name} with ${this.hairColor} hair color is in ${this.location} right now!`) 
 //}
//} 


//me.introduction();
//you.introduction();


//class Human {
  //constructor(name, haircolor, location, sleepscore) {
   // this.name = name
   // this.haircolor = haircolor
   // this.location = location
   // this.sleepscore = sleepscore
  //}
  //introduce() {
   // console.log(`This is ${this.name} with ${this.haircolor} hair color is in ${this.location} and had a sleepscore of ${this.sleepscore}`)
  //}
//}

//const rabeeza = new Human("Rabeeza", "Black", "Student",100);
//const jane = new Human("Jan", "Brown", "home",55);
//rabeeza.introduce();
//jane.introduce();
//rabeeza.hrv = 50;

