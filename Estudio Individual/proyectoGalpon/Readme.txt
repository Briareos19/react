Instalar modulos - npm install

backC4V2
se inicia con node app
para usar su propia base de datos modificar datos del archivo database.js

frontC4V1
se inicia con npm run serve

cambios
*. se integraron los dos backend en uno solo
*. se manejo el token en el front para:
1. sin login, no muestra boton salir y boton entrar envia a login
2. con login, muestra boton salir y boton entrar cambia a admin al dar clic envia a administracion de usuarios
3. al dar salir, se borrar el token, desaparece bonton salir y regresa el boton entrar  