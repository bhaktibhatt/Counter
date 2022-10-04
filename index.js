//ask html to get element using the id and reflect the increment on the doc
let countElement = document.getElementById("counter")
let saveEl = document.getElementById("save-el")
let count = 0
 
function increment(){
    count += 1;
    countElement.textContent = count
    console.log(count)
}
  
function decrement(){
    if(count>=1){
        count-=1;
    }
    else{
        console.log("Count is 0")
    }
    countElement.textContent = count;
}

function resetCounter(){ 
    count = 0;
    countElement.textContent = count;
    }

function save(){
    let countStr = count + "-"
    saveEl.textContent +=countStr;
}






