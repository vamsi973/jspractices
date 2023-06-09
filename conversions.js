console.log(Number(undefined), 152)
let str = true;

console.log(str)
console.log(String(str), 33); //string conversion
/**
 * string conversion anything is converted 
 */

let msg = "";
let msg1 = "Hi message";
let num = 123;

console.log(Number(msg), 12); // return 0
console.log(Number(msg1), 13); // return NaN
console.log(Number(str), 14); // return 1
console.log(Number(undefined), 15);// return NaN
console.log(Number(null), 16); //return  0
console.log(Number("123Z"), 16); //return  NaN

// conversion to boolean
console.log(Boolean('Vamsikrishna'),22); //return true
console.log(Boolean(' '),23); //return true
console.log(Boolean(''),24); //return false
console.log(Boolean('0'),25); //return true