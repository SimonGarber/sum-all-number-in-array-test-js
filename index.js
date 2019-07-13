
const sumItems = function(array) {
  let total = 0;
  for(let i = 0; i < array.length; i++) {
    if(Array.isArray(array[i])) {
      total+=sumItems(array[i])
      } else {
      total += array[i]
    }
    
  }
  return total;
}

  

   
    
    

  


  
  



// sumItems([1,2,3,4,5])
module.exports = sumItems;