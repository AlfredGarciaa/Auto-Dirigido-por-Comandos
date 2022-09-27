import { validarCadena, controladorDeAuto } from "./controlador_auto.js";
import { devolverDimension, devolverPosicionInicial,
        devolverOrientacion, devolverInstrucciones } from "./devolver_funciones.js";
import { ejecutarComandos } from "./movimiento_auto.js";

describe("CONTROLADOR DE AUTO", () => {
    it("deberia devolver 'ingresa una cadena'", () => {
        expect(controladorDeAuto('')).toEqual('Ingrese una cadena.');
    });
    it("deberia devolver 'error entrada'", () => {
        expect(controladorDeAuto('0,0/0,0aaaa')).toEqual('Error entrada.');
    });
    it("deberia devolver la posicion inicial, comandos y posicion final de la cadena '0,0/0,0a/aaaa'", () => {
        expect(controladorDeAuto('0,0/0,0a/aaa')).toEqual(['Posicion inicial: 0,0', 'Comandos: aaa', 'Posicion final: 0,0 a']);
    });
    it("deberia devolver 'el auto se encuentra fuera del rango'", () => {
        expect(controladorDeAuto('0,0/0,0o/a')).toEqual('El auto se encuentra fuera del rango');
    });
    it("deberia devolver 'el auto se encuentra fuera del rango'", () => {
        expect(controladorDeAuto('0,0/0,0e/a')).toEqual('El auto se encuentra fuera del rango');
    });
    it("deberia devolver 'el auto se encuentra fuera del rango'", () => {
        expect(controladorDeAuto('0,0/0,0n/a')).toEqual('El auto se encuentra fuera del rango');
    });
    it("deberia devolver 'el auto se encuentra fuera del rango'", () => {
        expect(controladorDeAuto('0,0/0,0s/a')).toEqual('El auto se encuentra fuera del rango');
    });
});

describe("VALIDAR CADENA", () => {
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
        expect(devolverPosicionInicial('0,0/0,0a/aaa')).toEqual([0, 0]);
    });
    it("deberia devolver la posicion inicial de cualquier cadena", () => {
        expect(devolverPosicionInicial('100,17/17,1a/aaa')).toEqual([17, 1]);
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
    it("deberia devolver la instruccion de la cadena '0,0/0,0a/aaa'", () => {
        expect(devolverInstrucciones('0,0/0,0a/aaa')).toEqual('aaa');
    });
    it("deberia devolver las instrucciones de cualquier cadena", () => {
        expect(devolverInstrucciones('100,17/0,0a/abcd')).toEqual('abcd');
    });
});

describe("EJECUTAR COMANDOS", () => {
    it("deberia ejecutar una instruccion 'i' con una orientacion hacia el norte", () => {
        expect(ejecutarComandos([0, 0], 'n', 'i')).toEqual([[0, 0], 'O']);
    });
    it("deberia ejecutar una instruccion 'i' con una orientacion hacia el norte", () => {
        expect(ejecutarComandos([0, 0], 'n', 'I')).toEqual([[0, 0], 'O']);
    });
    it("deberia ejecutar una instruccion 'd' con una orientacion hacia el norte", () => {
        expect(ejecutarComandos([0, 0], 'N', 'd')).toEqual([[0, 0], 'E']);
    });
    it("deberia ejecutar una instruccion 'd' con una orientacion hacia el norte", () => {
        expect(ejecutarComandos([0, 0], 'N', 'D')).toEqual([[0, 0], 'E']);
    });
    it("deberia ejecutar una instruccion 'a' con una orientacion hacia el norte", () => {
        expect(ejecutarComandos([0, 0], 'n', 'a')).toEqual([[0,1], 'n']);
    });
    it("deberia ejecutar una instruccion 'a' con una orientacion hacia el norte", () => {
        expect(ejecutarComandos([0, 0], 'n', 'A')).toEqual([[0,1], 'n']);
    });
    it("deberia ejecutar una instruccion 'i' con una orientacion hacia el oeste", () => {
        expect(ejecutarComandos([0, 0], 'O', 'i')).toEqual([[0,0], 'S']);
    });
    it("deberia ejecutar una instruccion 'i' con una orientacion hacia el oeste", () => {
        expect(ejecutarComandos([0, 0], 'O', 'I')).toEqual([[0,0], 'S']);
    });
    it("deberia ejecutar una instruccion 'd' con una orientacion hacia el oeste", () => {
        expect(ejecutarComandos([0, 0], 'o', 'd')).toEqual([[0,0], 'N']);
    });
    it("deberia ejecutar una instruccion 'd' con una orientacion hacia el oeste", () => {
        expect(ejecutarComandos([0, 0], 'o', 'D')).toEqual([[0,0], 'N']);
    });
    it("deberia ejecutar una instruccion 'a' con una orientacion hacia el oeste", () => {
        expect(ejecutarComandos([0, 0], 'O', 'a')).toEqual([[-1,0], 'O']);
    });
    it("deberia ejecutar una instruccion 'a' con una orientacion hacia el oeste", () => {
        expect(ejecutarComandos([0, 0], 'O', 'A')).toEqual([[-1,0], 'O']);
    });
    it("deberia ejecutar una instruccion 'i' con una orientacion hacia el sur", () => {
        expect(ejecutarComandos([0, 0], 's', 'i')).toEqual([[0,0], 'E']);
    });
    it("deberia ejecutar una instruccion 'i' con una orientacion hacia el sur", () => {
        expect(ejecutarComandos([0, 0], 's', 'I')).toEqual([[0,0], 'E']);
    });
    it("deberia ejecutar una instruccion 'd' con una orientacion hacia el sur", () => {
        expect(ejecutarComandos([0, 0], 's', 'd')).toEqual([[0,0], 'O']);
    });
    it("deberia ejecutar una instruccion 'd' con una orientacion hacia el sur", () => {
        expect(ejecutarComandos([0, 0], 'S', 'D')).toEqual([[0,0], 'O']);
    });
    it("deberia ejecutar una instruccion 'a' con una orientacion hacia el sur", () => {
        expect(ejecutarComandos([0, 0], 'S', 'a')).toEqual([[0,-1], 'S']);
    });
    it("deberia ejecutar una instruccion 'a' con una orientacion hacia el sur", () => {
        expect(ejecutarComandos([0, 0], 'S', 'A')).toEqual([[0,-1], 'S']);
    });
    it("deberia ejecutar una instruccion 'i' con una orientacion hacia el este", () => {
        expect(ejecutarComandos([0, 0], 'e', 'i')).toEqual([[0,0], 'N']);
    });
    it("deberia ejecutar una instruccion 'i' con una orientacion hacia el este", () => {
        expect(ejecutarComandos([0, 0], 'E', 'I')).toEqual([[0,0], 'N']);
    });
    it("deberia ejecutar una instruccion 'd' con una orientacion hacia el este", () => {
        expect(ejecutarComandos([0, 0], 'e', 'd')).toEqual([[0,0], 'S']);
    });
    it("deberia ejecutar una instruccion 'd' con una orientacion hacia el este", () => {
        expect(ejecutarComandos([0, 0], 'E', 'D')).toEqual([[0,0], 'S']);
    });
    it("deberia ejecutar una instruccion 'a' con una orientacion hacia el este", () => {
        expect(ejecutarComandos([0, 0], 'E', 'a')).toEqual([[1,0], 'E']);
    });
    it("deberia ejecutar una instruccion 'a' con una orientacion hacia el este", () => {
        expect(ejecutarComandos([0, 0], 'E', 'A')).toEqual([[1,0], 'E']);
    });
});
