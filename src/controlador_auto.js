function validarCadena(cadena) {

  let arregloDeCoincidencia = devolverArregloDeCoincidencias(cadena);
  if(arregloDeCoincidencia) return true;
  else return false;
}

function controladorDeAuto(cadena) {

  let salida;
  if (cadena) {
    let esValidoLaCadena = validarCadena(cadena);
    if(esValidoLaCadena) {
      let dimension = devolverDimension(cadena);
      let posicion = devolverPosicionInicial(cadena);
      let orientacion = devolverOrientacion(cadena);
      let instruccion = devolverInstrucciones(cadena)
      let posicionFinal = ejecutarComandos(posicion, orientacion, instruccion)

      if(posicionFinal[0] >= [0,0] && posicionFinal[0] <= dimension){
        salida = ['Posicion inicial: ' + posicion, 'Comandos: ' + instruccion, 'Posicion final: ' + posicionFinal[0] + ' ' + posicionFinal[1]];
      }else salida = 'El auto se encuentra fuera del rango';
    }else salida = 'Error entrada.';
  }
  else salida = 'Ingrese una cadena.';
  return salida;
}

import { devolverDimension, devolverArregloDeCoincidencias, devolverPosicionInicial,
        devolverOrientacion, devolverInstrucciones } from './devolver_funciones.js';
import { ejecutarComandos } from './movimiento_auto.js';
export { controladorDeAuto, validarCadena };
