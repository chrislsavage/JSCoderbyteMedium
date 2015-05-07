function Consecutive(arr) { 
var length = arr.length
arr = arr.sort(function (a,b) {return a-b});
var difference = arr[arr.length-1] - arr[0]

  // code goes here  
  return difference - length + 1; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
Consecutive(readline());           
