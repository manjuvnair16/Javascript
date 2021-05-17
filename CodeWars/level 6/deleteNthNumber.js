function deleteNth(arr,n){
  
  for(let i =0 ; i < arr.length ; i++){
    let count = 1;
    
    for(let j=i+1; j < arr.length ; j++){
     
      if (arr[i] == arr[j]){
         
        if(count < n){
          count += 1;
        } else {
          arr.splice(j,1); 
          j--;
          
        }
      }
    }
  }
  return arr;
}

console.log(deleteNth([41, 12, 41, 12, 12, 12, 8, 8, 41, 41, 12, 12, 12, 41, 12, 41, 17, 33, 33, 12, 17, 41, 12, 12, 41, 41, 17, 12, 41, 41, 12, 8, 33, 12], 7));

//console log
/*[
  41, 12, 41, 12, 12, 12,  8,  8,
  41, 41, 12, 12, 12, 41, 41, 17,
  33, 33, 17, 41, 17,  8, 33
]*/
//------------------------------------
/*Alternate solutions
function deleteNth(arr,x){
  var obj = {}
  return arr.filter(function(number){
    obj[number] = obj[number] ? obj[number] + 1 : 1
    return obj[number] <= x
  })
}
*/
