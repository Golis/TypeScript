export{}

let firstname = 'Diego';
let isAdmin = false;
let age = 30;
let duties = ['write code', 'fix bugs'];
let car = null;
let bicycle = undefined;

let work = () =>{
    console.log('working...');
}

//let salary = 50n;

const test1 = Symbol('test')
const test2 = Symbol('test')

//Symbol hace que nuestras variables o constantes sean únicas, por tanto, nunca pueden ser iguales a otra
//if(test1 === test2)

let all = [firstname, isAdmin, age, duties, car, bicycle, work, test1, test2]

for (let item of all){
    console.log(String(item) + ' is ' + typeof item);
}