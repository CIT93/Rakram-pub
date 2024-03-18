const TBL = document.getElementById("tab-data");

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

    function renderTblBtn(index, data){
      const td = document.createElement("td");
      const btnEdit = document.createElement("button");
      const btnDel= document.createElement("button");
      btnEdit.textContent = "Edit";
      btnDel.textContent = "Del";
      td.appendChild(btnEdit);
      td.appendChild(btnDel);
      btnDel.addEventListener('click', function(e){
        console.log('Hello from inside the delete button');
        console.log(e);
        data.splice(index, 1);
       renderTBL(data)
      ;
      });
    
      return td;
    }

  function renderTblBody(data){
    const tbody = document.createElement("tbody");
    data.forEach(function(Obj,index) {
      console.log(index);
      const tr = document.createElement("tr");
      for(const [key, value] of Object.entries(Obj)){
        if(key !== "lastName" && key !== "houseMPTS" && key !== "houseSMPTS") {
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
      const table = renderTBLHeading();
      const TBODY = creatingTBLBody(data);
      table.appendChild(TBODY);
      TBL.appendChild(table);
}


  
   export {renderTbl,};
   