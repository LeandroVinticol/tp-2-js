//17. Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.
const texto = prompt("Por favor, introduce un texto: ").toLowerCase();
const vocales = ["a", "e", "i", "o", "u"];
let posPriVocal = -1;

for (let i = 0; i < texto.length; i++) {
  if (vocales.includes(texto[i])) {
    posPriVocal = i;
    break;
  }
}

if (posPriVocal !== -1) {
  console.log(
    `La vocal '${texto[posPriVocal]}' está en la posición ${posPriVocal}`
  );
} else {
  console.log("No se encontraron vocales en el texto introducido.");
}
