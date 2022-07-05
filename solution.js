let introSentence = "hello, my name is Fran and I am";
let age =  25;
console.log(introSentence + ' ' + age);

// + operator is used to merge 2 strings but it also converts a number to a string

let integer= '1005';
let float = "10.05";
const ConvertNumber = integer*1;
console.log('this is a number',ConvertNumber);
console.log('string to number', +integer, +float);//+ is used to convert string to integer


console.log(parseFloat(float));
console.log(parseInt(float));
console.log(parseFloat(integer));
console.log(parseInt(integer));

console.log(~~integer);
console.log(~~float);