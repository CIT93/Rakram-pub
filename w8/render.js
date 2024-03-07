import { render } from "./main.js";

const TBL = document.getElementById("tab-data");

function renderTBLHeading(data) {
const thead = document.createElement("thead");
const tr = document.createElement("tr");
const headingTextArr = ["Name", "Footprint"];
if (data.length > 0) {
headingTextArr.forEach(function(text) {
const th = document.createElement("th");
th.textContent = text;
tr.appendChild(th);
});
thead.appendChild(tr);
}
return thead;
}

function renderTbl(data) {
const table = document.createElement("table");
const tbody = document.createElement("tbody");
data.forEach(function(obj, index) {
const tr = document.createElement("tr");
const tdName = document.createElement("td");
tdName.textContent = obj.firstName;
const tdTotal = document.createElement("td");
tdTotal.textContent = obj.cfpTotal;
tr.appendChild(tdName);
tr.appendChild(tdTotal);
tbody.appendChild(tr);
});
table.appendChild(renderTBLHeading(data));
table.appendChild(tbody);
TBL.appendChild(table);
}

function updateForm(index) {
const form = document.getElementById("form");
const inputName = form.elements.namedItem("name");
inputName.value = data[index].firstName;
const inputTotal = form.elements.namedItem("total");
inputTotal.value = data[index].cfpTotal;
}

function handleSubmit(e) {
e.preventDefault();
const form = document.getElementById("form");
const inputName = form.elements.namedItem("name");
const inputTotal = form.elements.namedItem("total");
const obj = { firstName: inputName.value, cfpTotal: inputTotal.value };
if (data.length === 0) {
data.push(obj);
} else {
data[index].firstName = inputName.value;
data[index].cfpTotal = inputTotal.value;
}
renderTbl(data);
}

export { renderTbl, updateForm, handleSubmit };

