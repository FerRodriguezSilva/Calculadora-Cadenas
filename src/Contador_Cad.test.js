import contCadena from './Contador_Cad.js'

describe("Cadena Vacia", () => {
    it("si la cadena esta vacia deberia devolver 0", () => {
      expect(contCadena("")).toEqual(0);
    });
  });