import { renderTBLHeading } from './render.js';
let thead;
var thName;
  var tableHeader = renderTBLHeading();
  document.body.appendChild(tableHeader);
  
  

  export function renderTbl(data) {
  
  
  
  
	
  let newData = {footprint: 'someValue'}; renderTbl(data, newData);

  





// const td = document.createElement('td'); td.appendChild(document.createTextNode('(link unavailable)')); tr.appendChild(td);
// const td = document.createElement('td'); td.textContent = data.houseHold; tr.appendChild(td);


const td = document.createElement("td");
td.textContent = "data.HouseHold"; 
const tr = document.createElement("tr");
tr.appendChild(td);


const div = document.createElement('div') 
div.appendChild(td);
tr.appendChild(div.firstChild);
const tbody = document.createElement('tbody-data');
const table = document.createElement('table');
table.appendChild(document.createElement('tbody'));
table.appendChild(tbody);
td.appendChild(document.createElement("button")).textContent = "Del";

tr.insertBefore(td, tr.childNodes[1]);

// export { renderTbl };
  };