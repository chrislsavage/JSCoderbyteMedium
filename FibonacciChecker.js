function FibonacciChecker(num) { 
var fib = [0,1];
  for (i=0; i<1000; i++) {
   fib.push(fib[i]+fib[i+1]); 
  }
   if (fib.indexOf(num) != -1) {
   return "yes";
   } else {
     return "no";
   }
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
FibonacciChecker(readline()); 