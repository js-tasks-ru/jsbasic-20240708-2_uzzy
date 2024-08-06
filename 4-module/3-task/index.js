function highlight(table) {
  for(let i = 0; i < table.rows.length; i++){
    let row = table.rows[i];
    let cell = row.cells;
    let attr = cell[cell.length - 1].dataset.available;
    for(let k = 0; k < cell.length; k++){
      if(cell[k].innerText == 'm'){
        row.classList.add('male');
      }
      if(cell[k].innerText == 'f'){
        row.classList.add('female');
      }
      if(cell[k].innerText < 18){
        row.style.textDecoration = 'line-through'
      }
      if (attr) {
        let attrExpression = cell[cell.length - 1].dataset.available == "true";
        switch(attrExpression){
          case true:
            row.classList.add('available');
            break;
          case false:
            row.classList.add('unavailable');
            break;
          default:
            break;
        }
      }
      else {
        row.dataset.available = 'hidden';
      }
    }
  }
}
