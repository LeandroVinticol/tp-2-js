//3. Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

let cadena = "";

do {
  let texto = prompt("Ingresar texto");

  if (texto === null) {
    break;
  }

  cadena += `-${texto}`;

  alert(`Ingresaste lo siguiente: ${texto}`);
} while (true);

alert(`Los textos que ingresaste fueron: ${cadena}`);
