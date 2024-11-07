import contCadena from "./Contador_Cad";  

const cadenaInput = document.querySelector("#cadena");
const delimitadorInput = document.querySelector("#delimitador");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  
  const cadena = cadenaInput.value;
  const delimitador = delimitadorInput.value.trim() || "";  

  
  const resultado = contCadena(cadena, delimitador);
  
  div.innerHTML = "<p>" + resultado + "</p>";
});

