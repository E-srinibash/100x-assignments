/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    let count=0;
    str = str.toLowerCase();
    for(let j=0;j<str.length;j++){
      let i = str.charAt(j);
      if(i==="a"||i==="e"||i==="i"||i==="o"||i==="u")
      count++;
    }
    console.log(count);
}

// console.log(countVowels("HelloWorld"));
countVowels("Hello World You freaks");
module.exports = countVowels;