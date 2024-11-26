const maths = require ('./maths'); //importing the custom module

const num1 = 20; const num2 = 5;

console.log(`Addition : ${maths.add(num1, num2)}`);
console.log(`Divide : ${maths.divide(num1, num2)}`);
console.log(maths.name  , maths.frmwork);

try{

    console.log(`Division by zero : ${maths.divide(num1 , num2)}`);

}catch (error){
    console.log(error.message);
}


