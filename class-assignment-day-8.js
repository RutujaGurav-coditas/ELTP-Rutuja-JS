function getLengthOfMissingArray(subArray) {
    const lengthOfArray=[];
    if(!Array.isArray(subArray)||subArray.length===0){
      return 0;
    }else{
    for(let index=0;index<subArray.length;index++){
      if(!Array.isArray(subArray[index])||subArray[index].length===0){
      return 0;
        }
     lengthOfArray.push(subArray[index].length);
    }
      }
  
    lengthOfArray.sort((a,b)=>a-b);
  
    for(let index=0;index<lengthOfArray.length-1;index++){
      
       if(lengthOfArray[index+1]-lengthOfArray[index]>1){
         return (lengthOfArray[index]+1);
       }
      }
    }
