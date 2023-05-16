# Modyo Challenge

La aplicación almacenada en este repositorio es un juego de Memoria, el cual consiste en visualizar tarjetas que contienen imagenes de animales por 4 segundos, luego se ocultan las imagenes y se debe, por medio de clicks, buscar las parejas con menor numero de errores posibles.

## Script configurados en el aplicativo

### npm run start
Este comando corre la aplicación de manera local en el puerto 3000, puede ver la aplicación directamente en su navegador ingresando a [http://localhost:3000](http://localhost:3000).


### npm run build
Este comando realiza el compilado del aplicativo el cual queda en la carpeta final build/*.


### npm run lint
Este comando permite realizar una validación y corrección del cumplimiento de las reglas establecidas en el [](Eslint), se usan las siguientes versiones

```
eslint: ^8.40.0
eslint-config-airbnb: ^19.0.4,
```

Se usa la configuración por defecto de AirBnB.
