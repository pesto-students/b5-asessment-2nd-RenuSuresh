
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

// Reduce:



export {
  forEach,
  map,
  filter,
  reduce,
}
