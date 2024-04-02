//1. Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.

const edad = parseInt(prompt("Ingresá tu edad"));

if (isNaN(edad)) {
  console.log("No es un número");
} else {
  if (edad >= 0 && edad < 100) {
    if (edad >= 18) {
      console.log("Puede conducir");
    } else {
      console.log("No puede conducir, es menor de edad");
    }
  } else {
    console.log("Edad en rango erroneo");
  }
}
