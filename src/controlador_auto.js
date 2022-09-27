function validarCadena(cadena) {
  
  let arregloDeCoincidencia = devolverArregloDeCoincidencias(cadena);
  if(arregloDeCoincidencia) {
    return true;
  }
  else {
    return false;
  }
}

function controladorDeAuto(cadena) {

  let salida;
  if (cadena) {
    let esValidoLaCadena = validarCadena(cadena);
    if(esValidoLaCadena) {
      let posicion = devolverPosicionInicial(cadena)
      let orientacion = devolverOrientacion(cadena);
      let instrucciones = devolverInstrucciones(cadena)
      salida = 'Posicion inicial: ' + posicion + '\nComandos: ' + instrucciones + '\nPosicion final: ' + posicion + " " + orientacion;
    }else {
      salida = 'Error entrada.';
    }
  }else { 
    salida = 'Ingrese una cadena.';
  }
  return salida;
}

import {devolverArregloDeCoincidencias, devolverPosicionInicial,
        devolverOrientacion, devolverInstrucciones} from './devolver_funciones.js';
export {controladorDeAuto, validarCadena};