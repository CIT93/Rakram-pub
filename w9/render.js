import {FORM, TBL} from "./global.js";
import {saveLs} from "./storage.js";

function renderTBLHeading () {
    TBL.innerHTML = "";
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tr = document.createElement("tr");
    const headingTextArr = ["Name", "HouseHold", "HouseSize", "Footprint", "Action"]
    headingTextArr.forEach(function(text){
      const th = document.createElement("th");
      th.textContent = text;
      tr.appendChild(th);
    });
    thead.appendChild(tr);
    table.appendChild(thead);
  return table
  } 
  
  function onUpdate(index, data){
    data.splice(index, 1);
        saveLs(data);
        renderTbl(data);
  }

    function renderTblBtn( obj, index, data){
      const td = document.createElement("td");
      const btnEdit = document.createElement("button");
      const btnDel= document.createElement("button");
      btnEdit.textContent = "Edit";
      btnDel.textContent = "Del";
      td.appendChild(btnEdit);
      td.appendChild(btnDel);
      
      btnDel.addEventListener('click', function(e){
       console.log("delete")
       onUpdate(index, data);
      });
    btnEdit.addEventListener(`click`, function(e){
     FORM[1].value = obj.firstName;
     FORM[2].value = obj.lastName;
     FORM[3].value = obj.houseM;
     FORM[4].value = obj.houseS;
     onUadate(index, data);
     renderTbl(data);
     
    });
    return td;
    }
  
  function renderTblBody (data){
    const tbody = document.createElement("tbody");
    data.forEach(function(Obj,index) {
      const tr = document.createElement("tr");
      for(const [key, value] of Object.entries(Obj)){
        console.log(`key ${key} value ${value}`);

        if(key !== "lastName" && key !== "houseMPTS" && key !== "houseSPTS") {
          const td = document.createElement("td");
          td.textContent = value;
          tr.appendChild(td);
    }
  }
  const td = renderTblBtn(Obj,index, data);
  tr.appendChild(td);
  tbody.appendChild(tr);
 });
 return tbody;
}

  function renderTbl(data) { 
    TBL.innerHTML = "";
    if (data.length !== 0) {
      const table = renderTBLHeading();
      const TBODY = renderTblBody(data);
      table.appendChild(TBODY);
      TBL.appendChild(table);
    }
 }
  export {renderTbl};



  