import {controladorDeAuto, validarCadena, devolverDimension, devolvePosicionInicial, 
        devolverOrientacion, devolverInstrucciones, ejecutarComandos} 
from "./controlador_auto.js";

describe("CONTROLADOR DE AUTO", () => {
  it("deberia devolver 'ingresa una cadena'", () => {
    expect(controladorDeAuto('')).toEqual('Ingrese una cadena.');
  });
  it("deberia devolver 'error entrada'", () => {
    expect(controladorDeAuto('0,0/0,0aaaa')).toEqual('Error entrada.');
  });
  it("deberia devolver 'Posicion inicial: 0,0\nComandos: i\nPosicion final: 0,0 n'", () => {
    expect(controladorDeAuto('0,0/0,0n/i')).toEqual('Posicion inicial: 0,0\nComandos: i\nPosicion final: 0,0 n');
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
  it("deberia devolver false si no se le envia una dimension'", () => {
    expect(validarCadena('/0,0a/aaa')).toEqual(false);
  });
  it("deberia devolver false si no se le envia una posicion inicial", () => {
    expect(validarCadena('0,0//aaa')).toEqual(false);
  });
  it("deberia devolver false si no se le envia una serie de instrucciones", () => {
    expect(validarCadena('0,0/0,0a/')).toEqual(false);
  });
});

describe("DEVOLVER DIMENSION", () => {
  it("deberia devolver la dimension de la cadena '0,0/0,0a/aaa'", () => {
      expect(devolverDimension('0,0/0,0a/aaa')).toEqual([0, 0]);
  });
  it("deberia devolver la dimension de cualquier cadena", () => {
    expect(devolverDimension('100,17/0,0a/aaa')).toEqual([100, 17]);
  });
});

describe("DEVOLVER POSICION INICIAL", () => {
  it("deberia devolver la posicion inicial de la cadena '0,0/0,0a/aaa'", () => {
    expect(devolvePosicionInicial('0,0/0,0a/aaa')).toEqual([0, 0]);
  });
  it("deberia devolver la posicion inicial de cualquier cadena", () => {
    expect(devolvePosicionInicial('100,17/17,1a/aaa')).toEqual([17, 1]);
  });
});

describe("DEVOLVER ORIENTACION", () => {
  it("deberia devolver la orientacion de la cadena '0,0/0,0a/aaa'", () => {
      expect(devolverOrientacion('0,0/0,0a/aaa')).toEqual('a');
  });
  it("deberia devolver la orientacion de cualquier cadena", () => {
    expect(devolverOrientacion('100,17/0,0z/aaa')).toEqual('z');
  });
});

describe("DEVOLVER INSTRUCCIONES", () => {
  it("deberia devolver las instrucciones de la cadena '0,0/0,0a/aaa'", () => {
      expect(devolverInstrucciones('0,0/0,0a/aaa')).toEqual('aaa');
  });
  it("deberia devolver la instrucciones de cualquier cadena", () => {
    expect(devolverInstrucciones('100,17/0,0a/abcd')).toEqual('abcd');
  });
});

describe("EJECUTAR COMANDOS", () => {
  it("deberia ejecutar una instruccione 'i' con una orientacion hacia el norte", () => {
      expect(ejecutarComandos('i')).toEqual('O');
  });
});