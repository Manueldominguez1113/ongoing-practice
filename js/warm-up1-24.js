function sumOfAll(input){

let inputArr=input.split('');
let sum = inputArr.reduce((total,sum)=>
     parseInt(total) + parseInt(sum));

return sum;

    /*    let x;
    input.toString().split('');
    input.length
 for(let i=0;i<input.length; i++){
     parseInt(input[i]);
     x += input[i]; }*/

   // return x;
}

console.log(sumOfAll('42958372'));
console.log(sumOfAll('917485'));