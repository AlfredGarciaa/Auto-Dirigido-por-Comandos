function ejecutarComandos(posicion, orientacion, instrucciones) {

  for (var i = 0; i < instrucciones.length; i++) {
    if(instrucciones[i] == 'i' || instrucciones[i] == 'I') orientacion = izquierda(orientacion);
    else if(instrucciones[i] == 'd' || instrucciones[i] == 'D') orientacion = derecha(orientacion);
    else if(instrucciones[i] == 'a'  || instrucciones[i] == 'A') posicion = avanzar(orientacion, posicion);
    else if(instrucciones[i] == 's'  || instrucciones[i] == 'S') posicion = saltar(orientacion, posicion);
  }
  return [posicion, orientacion];
}

function saltar(orientacion, posicion) {

  if(orientacion == 'n' || orientacion == 'N') {
    posicion[1] = posicion[1] + 2;
  }
  else if(orientacion == 'o' || orientacion == 'O') {
    posicion[0] = posicion[0] - 2;
  }
  else if(orientacion == 's' || orientacion == 'S') {
    posicion[1] = posicion[1] - 2;
  }
  else if(orientacion == 'e' || orientacion == 'E') {
    posicion[0] = posicion[0] + 2;
  }
  return posicion;
}

export { ejecutarComandos, saltar };
import { izquierda, derecha, avanzar } from './avance_auto.js';
