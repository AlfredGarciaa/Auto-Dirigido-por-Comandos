function ejecutarComandos(posicion, orientacion, instruccion) {
    if(orientacion == 'n' || orientacion == 'N') {
      if(instruccion == 'i' || instruccion == 'I') orientacion = 'O';
      else if(instruccion == 'd' || instruccion == 'D') orientacion = 'E';
      else if(instruccion == 'a'  || instruccion == 'A') posicion[1] = posicion[1] + 1;
    }
    else if(orientacion == 'o' || orientacion == 'O') {
      if(instruccion == 'i' || instruccion == 'I') orientacion = 'S';
      else if(instruccion == 'd' || instruccion == 'D') orientacion = 'N';
      else if(instruccion == 'a'  || instruccion == 'A') posicion[0] = posicion[0] - 1;
    }
    else if(orientacion == 's' || orientacion == 'S') {
      if(instruccion == 'i' || instruccion == 'I') orientacion = 'E';
      else if(instruccion == 'd' || instruccion == 'D') orientacion = 'O';
      else if(instruccion == 'a'  || instruccion == 'A') posicion[1] = posicion[1] - 1;
    }
    else if(orientacion == 'e' || orientacion == 'E') {
      if(instruccion == 'i' || instruccion == 'I') orientacion = 'N';
      else if(instruccion == 'd' || instruccion == 'D') orientacion = 'S';
      else if(instruccion == 'a'  || instruccion == 'A') posicion[0] = posicion[0] + 1;
    }
    return [posicion, orientacion];
  }

  export {ejecutarComandos};