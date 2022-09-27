const formato = /^(\d*)(\,)(\d*)(\/)(\d*)(\,)(\d*)([a-zA-Z])(\/)([a-zA-z]\D*)$/

function ejecutarComandos(posicion, orientacion, instrucciones) {

  for (var i = 0; i < instrucciones.length; i++) {
    if(orientacion == 'n' || orientacion == 'N'){
      if(instrucciones[i] == 'i' || instrucciones[i] == 'I') orientacion = 'O';
      else if(instrucciones[i] == 'd' || instrucciones[i] == 'D') orientacion = 'E';
      else if(instrucciones[i] == 'a'  || instrucciones[i] == 'A') posicion[1] = posicion[1] + 1;
    }

    else if(orientacion == 'o' || orientacion == 'O') {
      if(instrucciones[i] == 'i' || instrucciones[i] == 'I') orientacion = 'S';
      else if(instrucciones[i] == 'd' || instrucciones[i] == 'D') orientacion = 'N';
      else if(instrucciones[i] == 'a'  || instrucciones[i] == 'A') posicion[0] = posicion[0] - 1;
    }

    else if(orientacion == 's' || orientacion == 'S') {
      if(instrucciones[i] == 'i' || instrucciones[i] == 'I') orientacion = 'E';
      else if(instrucciones[i] == 'd' || instrucciones[i] == 'D') orientacion = 'O';
      else if(instrucciones[i] == 'a'  || instrucciones[i] == 'A') posicion[1] = posicion[1] - 1;
    }
    
    else if(orientacion == 'e' || orientacion == 'E') {
      if(instrucciones[i] == 'i' || instrucciones[i] == 'I') orientacion = 'N';
      else if(instrucciones[i] == 'd' || instrucciones[i] == 'D') orientacion = 'S';
      else if(instrucciones[i] == 'a'  || instrucciones[i] == 'A') posicion[0] = posicion[0] + 1;
    }
  }
  return [posicion, orientacion];
}

export { ejecutarComandos };
