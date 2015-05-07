function SimpleMode(arr) { 
  var modeCount = 1;
  var count = 1;
  var mode = -1;
arr = arr.sort(function (a,b) { return a - b ;});
  for (var i = 0; i < arr.length; i++) {
      console.log(arr[i]);
    if(arr[i] === arr[i+1]) {
      modeCount++;
      if(modeCount > count) {
        count = modeCount;
        mode = arr[i];
        console.log(arr[i], modeCount)
      } 
       modeCount = 1;
    }
   
  }
  return mode; 
                
}
   