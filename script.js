const arr = [
    "XÔNGĐẤT",
    "GIAOTHỪA",
    "ĐÁNHĐU",
    "CÂYNÊU",
    "TẤTIÊN",
    "BÁNHCHƯNG",
    "CÂUĐỐI",
    "HÁTXOAN",
    "NGÃBASÔNG"
]

const emptyCell = [ 6, 8, 3, 6, 4, 6, 5, 7, 1];

let tableElement = document.querySelector('.bodyApp')


function renderApp() {
     let table = "";
    for (let i = 0; i < arr.length; i++) {
          table += `<tr id ="${i}">`
        for (let j = 0; j < arr[i].length; j++) {
            table+= `<td class="${j}">${arr[i][j]}</td>` 
        }
        table+= `</tr>`
    }
    tableElement.innerHTML = table
}

function updateArr() {
    for(let i = 0 ; i < arr.length; i++){ 
        for(let j = 0 ; j < emptyCell[i]; j++){
            arr[i] = " " + arr[i].substring(0);
        }
        
    }
    renderApp();
}

function addColor() {
   let tdElms = document.getElementsByClassName("8");
    for(let tdElm of tdElms) {
        tdElm.classList.add('color')
    }
}

function addBorder  () {
   let tdElements = document.querySelectorAll(".bodyApp td");
   tdElements.forEach(tdElement => {
     if(tdElement.textContent !== " "){
        tdElement.classList.add("border")
     }
   })
}

updateArr();
renderApp();    
addBorder();
addColor();
