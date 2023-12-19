
//Using setInterval
/* */

setInterval(
function timer()
{   const date1 = new Date();
    console.log(date1.toLocaleTimeString())
    console.log(date1.toTimeString());
},1000);




// using setTimeout
let count = 0
function counter(){
    count++;
    const date2 = new Date();
    console.log(date2.toLocaleTimeString());
    console.log(date2.toTimeString());
    if(true){
        
        setTimeout(counter,1000);
    }
    }

  counter();  




