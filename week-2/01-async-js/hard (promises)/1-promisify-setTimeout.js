/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {

    return new Promise((resolve) =>{
    setTimeout(resolve,n*1000);
    }
    )
    .then(()=>{
        console.log(`Promise Resolved after ${n} seconds `);
    })
   }

// Enter value of n(seconds)
wait("n")


module.exports = wait;
