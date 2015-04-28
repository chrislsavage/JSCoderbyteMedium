function BinaryConverter(str) { 
  var decimal = 0;
  var converter = [1,2,4,8,16,32,64,128];
  for (var i = 0; i<str.length; i++) {
      console.log(str[i]);
  if (str[i] === "1") {
    decimal += converter[str.length - i -1];
  }
  }

  // code goes here  
  return decimal; 
         
}