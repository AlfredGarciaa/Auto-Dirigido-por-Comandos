import {controladorDeAuto, validarCadena} from "./controlador_auto.js";

describe("CONTROLADOR DE AUTO", () => {
  it("deberia devovler 'ingresa una cadena'", () => {
    expect(controladorDeAuto('')).toEqual('Ingrese una cadena');
  });
});

describe("VALIDAR UNA CADENA", () => {
  it("deberia devovler true para la cadena '0,0/0,0a/aaaa'", () => {
    expect(validarCadena('0,0/0,0a/aaa')).toEqual(true);
  });
  it("deberia devolver false para la cadena '0,0/0,0a/aaa'", () => {
    expect(validarCadena('0,0/0,0aaaa')).toEqual(false);
  });
});