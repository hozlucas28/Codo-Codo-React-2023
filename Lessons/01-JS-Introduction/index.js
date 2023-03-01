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
function add1(a, b) {
	return a + b;
}

console.log(add1(2, 3));

// Función flecha
myFn = (a, b) => a + b;

console.log(myFn(4, 6));

/* --------------------------- Template Strings -------------------------- */

const tmpStr = `Hola soy ${person1.name}`;
console.log(tmpStr);

/* ---------------------------- Destructuraciones --------------------------- */

// Objeto
const { name, age } = person2; // Valores tomados en base a las claves del objeto.

console.log(name, age);

// Array
const arr = ['Lucas', 'Nahuel', 'Marcos'];
const [nameArr1, nameArr2, nameArr3] = arr; // Valores tomados en base al orden del arreglo.

console.log(nameArr1, nameArr2, nameArr3);

/* ----------------------------- Spread Operator ---------------------------- */

const person4 = {
	...person2,
	name: 'Nahuel'
};

console.table(person4);

/* ------------------------------ Rest Operator ----------------------------- */

/*
	El <args> (parámetro) que utiliza el spread operator es un dato de tipo <array>.
*/

function add2(...args) {
	let c = 0;
	for (const arg of args) {
		c += arg;
	}

	return c;
}

console.log(add2(1, 5, 7, 8, 9, 3, 1));

/* ------------------------- Parámetros Por Defecto ------------------------- */

function add3(a = 1, b = 1) {
	return a + b;
}

console.log(add3());

/* ----------------------- Document Object Model (DOM) ---------------------- */

/*
	Abrir el archivo index.html y observar la consola de desarrollador.
*/

const getAllElements = () => {
	const elements = document.querySelectorAll('*');
	console.log(elements);
};

getAllElements();
