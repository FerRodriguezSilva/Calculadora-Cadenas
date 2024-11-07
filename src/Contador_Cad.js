function contCadena(cadena) {

    if (cadena === "") {
        return 0;
    }

    
    let partes = cadena.split(/[,|-]/).map(Number);
    let suma_total = 0;

    for (let i = 0; i < partes.length; i++) {
        suma_total += partes[i];
    }

    return suma_total;
}


export default contCadena