let count = 0; 
countElement = document.getElementById("counter");

 function increment(){
    //console.log("Button was clicked")
    //ask html to get element using the id and reflect the increment on the doc
    count +=1;
    countElement.innerText =  count;
    //console.log("Count was incremented to :"+count)
 }
 increment()
  
function decrement(){
    if(count>=1){
    count-=1;
    }
    else{
        console.log("Count is 0")
    }
    countElement.innerText = count;
    // STATEMENT ADD KRNA PADGEAA CAUSE NO OF PEOPLE AINT IN MINUS
}
decrement()

 function resetCounter()
 {
    count = 0;
    countElement.innerText = count;

 }
resetCounter()

function save(){
    countElement.innerText = count;
    console.log(count)
    //alert("Saved Count:"+count);
}
save()

//DOM
//document-HTML doc
//Object - doc is datatype object
//Model - rep of actual element
//save Previous enteries




