module.exports = function check(str, bracketsConfig) {
  let open = [];
  let close = [];
  let same =[];
  let stack = [];
  let result = true;
  for(let i = 0;i<bracketsConfig.length;i++){
     open.push(bracketsConfig[i][0]);
     close.push(bracketsConfig[i][1]);
     if (bracketsConfig[i][0] ==  bracketsConfig[i][1])
      same.push(bracketsConfig[i][0]);
  }
  for(let i = 0;i<str.length;i++){
    if (open.indexOf(str[i]) != -1 && stack.length>=0){
        //alert("push "+ str[i]);
      stack.push(str[i]);
      
      if (stack[stack.length-1] === stack[stack.length-2] && same.indexOf(stack[stack.length-1])!= -1){
         // alert("pop " + stack[stack.length-1]);
        stack.pop();
        //alert("pop "+ stack[stack.length-1]);
        stack.pop();
      }
    }
    else {
        //alert (close.indexOf(str[i]));
       // alert (open.indexOf(stack[stack.length-1]));
      if(close.indexOf(str[i])==open.indexOf(stack[stack.length-1])){
        if (stack.length<=0){
          result = false;
          break;

        }
        //alert("pop "+ stack[stack.length-1]);
        stack.pop();
      
      }
      else{
          result = false;
          break;
      }
      //alert ("dddd")
    }
    }
    if (stack.length>0) result = false;
    return result;
}
