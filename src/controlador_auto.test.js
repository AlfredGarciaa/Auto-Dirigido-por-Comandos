import controladorDeAuto from "./controlador_auto.js";

describe("CONTROLADOR DE AUTO", () => {
    it("deberia devovler 'ingresa una cadena'", () => {
        expect(controladorDeAuto('')).toEqual('Ingrese una cadena');
    });
});