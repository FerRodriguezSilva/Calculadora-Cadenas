function contCadena(cadena,delimitador) {

    if (cadena === "") {
        return 0;
    }

   
  let delimitadores = [",|-"];

 
  if (delimitador) {
    delimitadores += `|${delimitador}`;
  }


  let delimitadorRegex = new RegExp(`[${delimitadores}]`, 'g');
  
  
  let partes = cadena.split(delimitadorRegex).map(Number);
    let suma_total = 0;

    for (let i = 0; i < partes.length; i++) {
        if(partes[i]<1000)
        suma_total += partes[i];
    }

    return suma_total;
}


export default contCadena