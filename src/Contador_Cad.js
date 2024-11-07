function contCadena(cadena,delimitador) {

    if (cadena === "") {
        return 0;
    }

    // Definir los delimitadores predeterminados
  let delimitadores = [",|-"];

  // Si el usuario proporciona un delimitador adicional, lo agregamos
  if (delimitador) {
    delimitadores += `|${delimitador}`;
  }

   // Crear una expresión regular con todos los delimitadores
  let delimitadorRegex = new RegExp(`[${delimitadores}]`, 'g');
  
  // Separar la cadena usando la expresión regular
  let partes = cadena.split(delimitadorRegex).map(Number);
    let suma_total = 0;

    for (let i = 0; i < partes.length; i++) {
        if(partes[i]<1000)
        suma_total += partes[i];
    }

    return suma_total;
}


export default contCadena