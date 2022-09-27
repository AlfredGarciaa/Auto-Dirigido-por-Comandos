function ejecutarComandos(posicion, orientacion, instrucciones) {

  for (var i = 0; i < instrucciones.length; i++) {
    if(instrucciones[i] == 'i' || instrucciones[i] == 'I') orientacion = izquierda(orientacion);
    else if(instrucciones[i] == 'd' || instrucciones[i] == 'D') orientacion = derecha(orientacion);
    else if(instrucciones[i] == 'a'  || instrucciones[i] == 'A') posicion = avanzar(orientacion, posicion);
  }
  return [posicion, orientacion];
}

export { ejecutarComandos };
import { izquierda, derecha, avanzar } from './avance_auto.js';
