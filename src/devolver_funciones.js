const formato = /^(\d*)(\,)(\d*)(\/)(\d*)(\,)(\d*)([a-zA-Z])(\/)([a-zA-z]\D*)$/

function devolverDimension(cadena) {

    let arregloDeCoincidencia = devolverArregloDeCoincidencias(cadena);
    let x = parseInt(arregloDeCoincidencia[1]);
    let y = parseInt(arregloDeCoincidencia[3]);
    return [x, y];
  }
  
  function devolverArregloDeCoincidencias(cadena) {
  
    return cadena.match(formato)
  }
  
  function devolverPosicionInicial(cadena) {
  
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

  export {devolverDimension, devolverArregloDeCoincidencias, devolverPosicionInicial,
          devolverOrientacion, devolverInstrucciones};