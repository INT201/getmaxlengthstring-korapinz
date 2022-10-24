const { template } = require('@babel/core')

function getMaxLengthString(arrayOfString) {
  if(arrayOfString===undefined  || arrayOfString === null) return undefined
  arrayOfString.sort((a,b)=>(a.length-b.length))
  const maxlength = arrayOfString[arrayOfString.length-1].length
 return arrayOfString.filter((item)=>item.length===maxlength)
}


module.exports = getMaxLengthString
