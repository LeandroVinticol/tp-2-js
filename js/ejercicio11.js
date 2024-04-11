//11. Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor.

let nombre1 = prompt("Ingrese el nombre de la primera persona:");
let edad1 = parseInt(prompt("Ingrese la edad de la primera persona:"));

let nombre2 = prompt("Ingrese el nombre de la segunda persona:");
let edad2 = parseInt(prompt("Ingrese la edad de la segunda persona:"));

let nombre3 = prompt("Ingrese el nombre de la tercera persona:");
let edad3 = parseInt(prompt("Ingrese la edad de la tercera persona:"));

let edadMayor = Math.max(edad1, edad2, edad3);
let nombreMayor = "";

if (edadMayor === edad1) {
  nombreMayor = nombre1;
} else if (edadMayor === edad2) {
  nombreMayor = nombre2;
} else {
  nombreMayor = nombre3;
}

console.log(`La persona de mayor edad es ${nombreMayor} con ${edadMayor} años`);
