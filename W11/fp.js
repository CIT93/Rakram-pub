class FP {
    constructor(first, last, houseMembers, houseSize, foodChoice) {
        this.first = first;
        this.last = last;
        this.houseMembers = houseMembers;
        this.houseSize = houseSize;
        this.foodChoice = this.foodChoice;
        this.houseHoldpoints();
        this.houseSizePoints();
        this.total();
    }

    houseHoldpoints() {
    if (this.houseMembers === 1) {
      this.houseHoldpoints = 14;
    } else if (this.houseMembers === 2) {
      this.houseHoldpoints = 12;
    } else if (this.houseMembers === 3) {
     this.houseHoldpoints = 10;
    } else if (this.houseMembers === 4) {
      this.houseHoldpoints = 8;
    } else if (this.houseMembers === 5) {
      this.houseHoldpoints = 6;
    } else if (this.houseMembers === 6) {
     this.houseHoldpoints = 4;
    } else if (this.houseMembers > 6) {
     this.houseHoldpoints = 2;
    }
}
 // console.log(this.houseHoldpoints) ;


    houseSizePoints() {
console.log(this.houseSize);
    if (this.houseSize === "large") {
        houseSizePoints = 10;
    } else if (this.houseSize === "medium") {
        houseSizePoints = 7;
    } else if (this.houseSize === "small") {
        houseSizePoints = 4;
    } else if (this.houseSize === "apt") {
        houseSizePoints = 2;

    } 
}


foodChoice() {
  if (this.foodChoice === "Daily") {
    houseSizePoints = 10;
} else if (this.foodChoice === "weekly") {
    houseSizePoints = 7;
} else if (this.foodChoice === "veg") {
    houseSizePoints = 4;
} else if (this.foodChoice === "Mild") {
    houseSizePoints = 2;
 }
}

 total() {
    this.total = this.houseHoldpoints + this.houseSizePoints + this.foodChoice;
   }
 }


    export {FP};


 
