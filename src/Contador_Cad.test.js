import contCadena from './Contador_Cad.js'

describe("Cadena Vacia", () => {
    it("si la cadena esta vacia deberia devolver 0", () => {
      expect(contCadena("")).toEqual(0);
    });
    it('Si la ceda tiene un numero devolver ese numero',()=>{
        expect(contCadena("2")).toEqual(2);
    })
  });
