/* ---------------------------- Datos Primitivos ---------------------------- */

const myNull = null; // null
const myNumber = 12; // number
const myBigInt = 1n; // bigInt
const myBool = true; // boolean
const myString = 'Hola Mundo'; // string
const myUndefined = undefined; // undefined
const mySymbol = Symbol('apple'); // symbol

/* --------------------------- Datos No Primitivos -------------------------- */

/*
    - Son datos compuestos por datos primitivos.
    - Dos objetos no pueden ser iguales porque referencian memoria, la cual no se comparte.
*/

// Object
const myObject = {
	name: 'Lucas',
	age: 21
};

myObject.name = 'Nahuel';
console.log(myObject);

// Array
const myArray = [1, 2, 3];

console.log([] === []); // false

/* -------------------------------- Ternario -------------------------------- */

// Ternario
true ? console.log(true) : console.log(false);

/* --------------------------------- Bucles --------------------------------- */

/*
	- <for in> = Se utiliza para objetos.
	- <for of> = Se utiliza para arreglos.
*/

// Objeto
const person1 = {
	name: 'Lucas',
	age: 21
};

for (const i in person1) {
	console.log(person1[i]);
}

// Array
const person2 = ['Nico', 'Pablo'];

for (const i of person2) {
	console.log(i);
}

/* -------------------------------- Funciones ------------------------------- */

// Función tradicional
function add(a, b) {
	return a + b;
}

console.log(add(2, 3));

// Función flecha
myFn = (a, b) => a + b;

console.log(myFn(4, 6));
