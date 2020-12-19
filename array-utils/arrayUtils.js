
function forEach(array,callbackFunc){
  for(let i=0;i<array.length;i++){
    callbackFunc(array[i],i,array)
  }
}

// Map
function map(array,callback){
  let returnUpdatedArray = [];
  for(let i=0;i<array.length;i++){
//     modified each array element
    let modifiedElement = callback(array[i],i,array);
    returnUpdatedArray.push(modifiedElement)
  }

  return returnUpdatedArray;
}


// Filter: return array element in list if condition is true
function myFilter(array,callback){
  let returnedArray= [];
  for(let i=0; i<array.length;i++){
    if(callback(array[i],i,array)){
      returnedArray.push(array[i])
    }
  }
  return returnedArray;
}

// Reduce: returns single value
function myReduce(array, callbackFunc, initialValue) {
  let acc = initialValue == undefined ? undefined : initialValue;
  
  for (let i = 0; i < array.length; i++) {
    if (acc != undefined) {
      // Set accumulator to ? Call(callbackfn, undefined, « accumulator, kValue, k, O »).
      acc = callbackFunc.call(undefined, acc, array[i], i, array);
    } else {
      acc = array[i];
    }
  }
  return acc;
}


export {
  forEach,
  map,
  filter,
  reduce,
}
