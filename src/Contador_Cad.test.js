import contCadena from './Contador_Cad.js'

describe("Cadena Vacia", () => {
    it("si la cadena esta vacia deberia devolver 0", () => {
      expect(contCadena("","")).toEqual(0);
    });
    it('Si la ceda tiene un numero devolver ese numero',()=>{
        expect(contCadena("2","")).toEqual(2);
    })
    it('Si la cadena tiene ahora mas de un valor',()=>{
        expect(contCadena("2,3","")).toEqual(5);
    })
    it('Si la cadena tiene un diferente separador',()=>{
        expect(contCadena("2,3-5","")).toEqual(10);
    })
   /* it('El usuario puede elegir el delimitador',()=>{
        expect(contCadena("2,3-5;5",";")).toEqual(15);
    })*/
    it('Si la cadena tiene numeros mayores a mil ignorarlos',()=>{
                expect(contCadena("2,3-5,1002","")).toEqual(10);
     })
  });
