//16. Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.

let texto = prompt("Introduce un texto");
let textoAlReves = texto.split("").reverse().join("");

console.log(`El texto al revés es el siguiente: ${textoAlReves}`);
