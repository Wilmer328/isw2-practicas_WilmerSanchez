# Evidencia — Práctica 8

## 1. Pipeline de integración continua

Se configuró un workflow de GitHub Actions en:

`.github/workflows/ci.yml`

El workflow se ejecuta automáticamente cuando se realiza un `push` al repositorio.

Actualmente el pipeline ejecuta las pruebas automatizadas correspondientes a las prácticas 4 y 5, permitiendo verificar que los cambios realizados no rompan el comportamiento existente del proyecto.

La ejecución del workflow fue comprobada en GitHub Actions y finalizó correctamente con estado **Success**.

## 2. Ejecución verde en GitHub Actions

El primer workflow ejecutado para la Práctica 8 terminó correctamente.

Resultado:

- Workflow: `ci(practica-8): agregar workflow de tests`
- Job: `tests`
- Estado: **Success**
- Duración aproximada: 11 segundos

Esto demuestra que el pipeline está funcionando correctamente y que las pruebas configuradas pasan en el entorno de GitHub Actions.

## 3. URL pública

Se configuró GitHub Pages para publicar el repositorio.

La aplicación/documentación está disponible públicamente en:

https://wilmer328.github.io/isw2-practicas_WilmerSanchez/

La configuración utiliza la rama:

`feature/practica-8`

y la carpeta raíz `/`.

Además, GitHub Pages tiene habilitado HTTPS.

## 4. ¿Qué ejecuta actualmente el pipeline?

Actualmente el pipeline se encarga principalmente de ejecutar las pruebas automatizadas de las prácticas 4 y 5.

Esto permite detectar errores automáticamente cada vez que se realizan cambios mediante `push` al repositorio.

De esta forma, el repositorio cuenta con una primera capa de integración continua que verifica que el código mantenga su comportamiento esperado.

## 5. ¿Qué agregaría después?

Como siguientes mejoras al pipeline agregaría:

- **Lint**, para detectar problemas de estilo y errores comunes en el código.
- **Pruebas E2E**, para verificar el funcionamiento completo de la aplicación.
- **Build de producción**, para comprobar que el proyecto pueda construirse correctamente antes de desplegarse.
- **Deploy automático**, para publicar únicamente versiones que hayan superado todas las validaciones.

Estas mejoras permitirían convertir el pipeline actual en un proceso más completo de integración y entrega continua.

## 6. Conclusión

La Práctica 8 permitió incorporar automatización al repositorio mediante GitHub Actions y publicar el proyecto mediante GitHub Pages.

La ejecución verde del workflow demuestra que las pruebas configuradas funcionan correctamente, mientras que la URL pública permite comprobar que el proyecto puede ser consultado desde Internet.

Con esto, el repositorio deja de depender únicamente de verificaciones manuales y comienza a contar con un proceso automatizado de validación.