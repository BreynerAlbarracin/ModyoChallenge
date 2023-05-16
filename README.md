
Incluir instrucciones para probar el proyecto en local en un fichero de nombre README.md ubicado en la raíz del proyecto o en su defecto desplegarlo en algún ambiente explicando en el readme que método se utilizó para el despliegue.

#

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
