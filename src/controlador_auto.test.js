import {controladorDeAuto, validarCadena} from "./controlador_auto.js";

describe("CONTROLADOR DE AUTO", () => {
  it("deberia devolver 'ingresa una cadena'", () => {
    expect(controladorDeAuto('')).toEqual('Ingrese una cadena.');
  });
  it("deberia devolver 'error entrada'", () => {
    expect(controladorDeAuto('0,0/0,0aaaa')).toEqual('Error entrada.');
  });
});

describe("VALIDAR UNA CADENA", () => {
  it("deberia devolver true para la cadena '0,0/0,0a/aaaa'", () => {
    expect(validarCadena('0,0/0,0a/aaa')).toEqual(true);
  });
  it("deberia devolver true para cualquier cadena que cumpla el formato", () => {
    expect(validarCadena('9,8/7,6a/abcd')).toEqual(true);
  });
  it("deberia devolver false para la cadena '0,0/0,0a/aaa'", () => {
    expect(validarCadena('0,0/0,0aaaa')).toEqual(false);
  });
  it("deberia devovler false si no se le envia una dimension'", () => {
    expect(validarCadena('/0,0a/aaa')).toEqual(false);
  });
  it("deberia devovler false si no se le envia una posicion inicial", () => {
    expect(validarCadena('0,0//aaa')).toEqual(false);
  });
  it("deberia devovler false si no se le envia una serie de instrucciones", () => {
    expect(validarCadena('0,0/0,0a/')).toEqual(false);
  });
});