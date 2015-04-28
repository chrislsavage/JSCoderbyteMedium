function PalindromeTwo(str) { 
    var reverse = [];
  str = str.match(/[\w]+/g).join("").toLowerCase();
  console.log(str);
  for (var i = 0; i < str.length; i++) {  //For fun, dediced to do this differently than first palindrome where I looped backward and added a string together
      reverse.unshift(str[i]);
  }

if (str == reverse.join("")) { return true }
return false;

         
}