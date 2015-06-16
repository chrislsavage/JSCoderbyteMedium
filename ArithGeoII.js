var result = -1
function ArithGeoII(arr) {
var arithInterval = arr[1] - arr[0];   //creates an interval that is determined by subtracting the first number in the array from the first
var geoInterval = arr[1] / arr[0];     // does the same only devides the second number by the first number.a
for (var i=0; i< arr.length - 1; i++)  {  //takes one away from the array so that the following is logical
if (arr[i] + arithInterval === arr[i + 1]) {  //checks if the interval works through the array
  result = "Arithmetic";
}
else if (arr[i] * geoInterval === arr[i + 1]) {
  result = "Geometric";
}else { result = -1 }
}
  return result;

}
