const Tbl = document.getElementById("tab-data");

let table;

function renderTBLHeading () {
  Tbl.innerHTML = "";
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");
  const headingTextArr = ["Name", "HouseHold", "HouseSize", "Footprint", "Action"];
  headingTextArr.forEach(function(text){
    const th = document.createElement("th");
    th.textContent = text;
    tr.appendChild(th);
  });
  thead.appendChild(tr);
  table.appendChild(thead);
    return table

}
  
function renderTblBtn(index,data){
  const td = document.createElement("td");
  const btnEdit = document.createElement("button");
  const btnDel = document.createElement("button");
  btnEdit.textContent = "Edit";
  btnDel.textContent = "Del";
  td.appendChild(btnEdit);
  td.appendChild(btnDel);
  btnDel.addEventListener('click', function(e){
    console.log('Hello from inside the delete button');
    console.log(e);
    data.splice(index,1);
    renderTbl(data);
 });
  btnEdit.addEventListener("click", function (e) {
    FORM[1].value = obj.fname;
    FORM[2].value = obj.lname;
    FORM[3].value = obj.members;
    FORM[4].value = obj.size;

    data.splice(index, 1);
    renderTbl(data);
  });
  return td;
 }


function renderTBLBody(data){
  const tbody = document.createElement("tbody");
  data.forEach(function (obj, index) {
    console(index);
   const tr = document.createElement("tr");
   for (const [key, value] of Object.entries(obj)) {
    console.log('key ${key} value ${value}');
    if (key !== "lastName" && key !== "houseMPTS" && key !== "houseSPTS") {
      const td = document.createElement("td");
      td.textContent = value;
      tr.appendChild(td);
    }
  }

 const td = renderTblBtn(index, data);
  tr.appendChild(td);
  tbody.appendChild(tr);
  });
return tbody;
}

function createRow(data) {
	return document.createElement("tr");
}


function renderTbl(data) {
	if (data.length !== 0) {
		const table = renderTBLHeading();
		const tbody = createRow(data);
		table.appendChild(tbody);
		Tbl.appendChild(table);
		table.remove();
  }
}


export { renderTbl };

  

