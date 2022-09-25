const formato = /^(\d*)(\,)(\d*)(\/)(\d*)(\,)(\d*)([a-zA-Z])(\/)([a-zA-z]\D*)$/

function controladorDeAuto(cadena) {

  let salida;
  if (cadena) {
    let esValidoLaCadena = validarCadena(cadena);
    if(esValidoLaCadena) {
        let posicion = devolvePosicionInicial(cadena)
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

function validarCadena(cadena) {
  
  let arregloDeCoincidencia = devolverArregloDeCoincidencias(cadena);
  if(arregloDeCoincidencia) {
    return true;
  }
  else {
    return false;
  }
}

function devolverDimension(cadena) {

  let arregloDeCoincidencia = devolverArregloDeCoincidencias(cadena);
  let x = parseInt(arregloDeCoincidencia[1]);
  let y = parseInt(arregloDeCoincidencia[3]);
  return [x, y];
}

function devolverArregloDeCoincidencias(cadena) {

  return cadena.match(formato)
}

function devolvePosicionInicial(cadena) {

  let arregloDeCoincidencia = devolverArregloDeCoincidencias(cadena);
  let x = parseInt(arregloDeCoincidencia[5]);
  let y = parseInt(arregloDeCoincidencia[7]);
  return [x,y];
}

function devolverOrientacion(cadena) {

  let arregloDeCoincidencia = devolverArregloDeCoincidencias(cadena, formato);
  let orientacion = arregloDeCoincidencia[8];
  return orientacion;
}

function devolverInstrucciones(cadena) {

  let arregloDeCoincidencia = devolverArregloDeCoincidencias(cadena, formato);
  let orientacion = arregloDeCoincidencia[10];
  return orientacion;
}

export {controladorDeAuto, validarCadena, devolverDimension, devolvePosicionInicial, devolverOrientacion, devolverInstrucciones};