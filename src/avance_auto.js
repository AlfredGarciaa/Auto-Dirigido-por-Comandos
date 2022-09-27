function izquierda(orientacion) {

    if(orientacion == 'n' || orientacion == 'N'){
      orientacion = 'O';
    }
    else if(orientacion == 'o' || orientacion == 'O') {
      orientacion = 'S';
    }
    else if(orientacion == 's' || orientacion == 'S') {
      orientacion = 'E';
    }
    else if(orientacion == 'e' || orientacion == 'E') {
      orientacion = 'N';
    }
    return orientacion;
  }
  
  function derecha(orientacion) {

    if(orientacion == 'n' || orientacion == 'N') {
      orientacion = 'E';
    }
    else if(orientacion == 'o' || orientacion == 'O') {
      orientacion = 'N';
    }
    else if(orientacion == 's' || orientacion == 'S') {
      orientacion = 'O';
    }
    else if(orientacion == 'e' || orientacion == 'E') {
      orientacion = 'S';
    }
    return orientacion;
  }
  
  function avanzar(orientacion, posicion) {

    if(orientacion == 'n' || orientacion == 'N') {
      posicion[1] = posicion[1] + 1;
    }
    else if(orientacion == 'o' || orientacion == 'O') {
      posicion[0] = posicion[0] - 1;
    }
    else if(orientacion == 's' || orientacion == 'S') {
      posicion[1] = posicion[1] - 1;
    }
    else if(orientacion == 'e' || orientacion == 'E') {
      posicion[0] = posicion[0] + 1;
    }
    return posicion;
  }

export { izquierda, derecha, avanzar };
