const fs = require("fs");

function fileReader(filePath){
return new Promise((resolve,reject)=>{    
fs.readFile(filePath,"utf-8",(err,data) => {
    if(err){
       reject(err);
    }else{
    resolve(data);
}})
})
}

fileReader("filePath")
.then(data => {
    console.log(data);
})
.catch(err => {
    console.log(err);
});

let sum = 0;
for(let i=0;i<10000000000;i++){
    sum = sum + i;
}
console.log(sum);
