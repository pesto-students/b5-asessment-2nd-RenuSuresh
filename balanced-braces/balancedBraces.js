const balancedBraces = (data)=>{
  const str=data.replace(
    /[A-Za-z0-9=!@#$%^&*_+=,.;<>?/| `~]/g,
    ""
  );
  if(str.length<1){
    return false
  }

  let bracketStack=[];

const obj = {'{':'}','[':']','(':')'}

for(let i=0;i<str.length;i++){
  
  if(str[i]==='{'||str[i]==='['||str[i]==='(') {
    bracketStack.push(str[i]);
  } else{
    
   let lastElement=bracketStack.pop();
   
   if(str[i]!==obj[lastElement]){
  
     return false;
   }
  }
}
return true;
  
}

export {
  balancedBraces,
};
