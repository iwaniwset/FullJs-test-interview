const nearestFib = (arr) => {
  let result = 0;
  let arrSum = 0;
  let numFib = 8;
  let arrTemp = [0, 1];

  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
    arrSum += arr[i];
    // console.log(arrSum, "<<<<< arr sum");
  }
  // console.log("jumlah array " + numFib);
  for (let i = 1; i <= numFib; i++) {
    nextTerm = arrTemp[arrTemp.length - 2] + arrTemp[arrTemp.length - 1];
    arrTemp.push(nextTerm);
  }
  // console.log("Ini Deret Fibonacci yang tersedia " + arrTemp );


  const closest   = arrTemp.reduce((a, b) => {
      return Math.abs(b - arrSum) < Math.abs(a - arrSum) ? b : a;
  });
  result = closest
  return result
}

console.log(nearestFib([8,11])); //21
console.log(nearestFib([1,3,5]));
