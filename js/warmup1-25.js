// 1433257788
let num= "BQAAIPPPPFFA"
let strArray = [ "q", "w", "w", "w", "e", "i", "u", "r"];
let findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) !== index)

console.log(findDuplicates(strArray)) // All duplicates
console.log([...new Set(findDuplicates(strArray))]) // Unique duplicates

function dup(input){
    let newInput=input.toString().split("");
    let filter=newInput.filter((item,index)=> newInput.indexOf(item) !==index)
 return filter
}
console.log(dup(num)) // All duplicates
console.log([...new Set(dup(num))]) // Unique duplicates
