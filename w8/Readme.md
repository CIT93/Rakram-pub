This README.md file, explains on how the code from all files works:

index.html file:
This file is the main display output as it will get the files from main.js, render.js, funCF.js and style.css. some of the code that is in this file will display in the live server when opening it. 

main.js file:
This file is what I would call the "behind the scene" code. As you really don't see any of the code being displayed UNLESS if the code is called in console.log or called to the html. There are two import files at the top of the code which are functions from different js files, renderTBL(cfpData) and will code it from there which is in the 

cfp.js 
This file is to calculate the numbers of members in the household and as well as size of the house. The variable houseHoldpts and sizePts will be set to 0. Whatever the user puts in for their number (numInHouse) and size (size) both functions will find the number and size in the function coded. After finding both things in both functions it will return both variables houseHoldpts and sizePts and will be sent back to the main.js which will be put in the array of objects
render.js file:
This file does two things: 1. render a table heading (renderTblHeading) will have the title (Name, houseMem, Size, and CF) in the function and be displayed in a table like format 2. Grab the user's input from the cfpData in the main.js and will bring the array of objects into renderTbl(data) and will put the user's input in a table like format. 
This file is more of a quality of life file being able to change some of the text's colors or the color of the background in the diplay output in html. BtnEdit.addEventListener():
