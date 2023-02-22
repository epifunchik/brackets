module.exports = function check(str, bracketsConfig) {
  let arrStr = Array.from(str)
  let result = true
  console.log(arrStr, bracketsConfig)
  let stack = []
  for (let i = 0; i < arrStr.length; i++){
    
    let symbol = arrStr[i]
    for (let key of bracketsConfig){
      // console.log('key', key)
    if (key[0].includes(symbol)){
      stack.push(symbol)
      // console.log(bracketsConfig[symbol])
      //  console.log('push', stack)
    }
    else{
      if (stack.length === 0){
        result = true
      }
    } 


  //  console.log('x', stack)
   let n = key[0]
  //  console.log('key 1', key[1], 'symbol', symbol)

    let topElement = stack[stack.length - 1]
    if(key[1] === symbol){
      // console.log(n[symbol], topElement)
      stack.pop()
    //  console.log('pop', stack)
    }
    else{
      result = false
    }
  }
}
  // console.log('stack', stack)
  return stack.length === 0 ? result = true : result = false
}
