# Programación Web - Examen Final
Proyecto Final para la materia Programación Web.  Universidad Tecnológica Nacional - Facultad Regional Tucumán.
Consiste en el desarrollo de un sistema web de administración, el cual simula un sistema de turnos para un centro médico. Este es un proyecto académico pero puede ser utilizado con fines didácticos y educativos.

## Documentación solicitada
1. [x] Objetivos del proyecto.
2. [x] Diagrama Entidad - Relación.
3. [x] Casos de Uso de las funcionalidades desarrolladas.
4. [x] Capturas de pantalla del sistema funcionando.

### Aclaración
El repositorio solo contendrá como documentación el Modelo Conceptual.

## Requisitos
Antes de clonar el proyecto deben tener instalado y configurado NodeJS, el gestor de paquetes NPM y MySQL.

## Instalación
1. Clonar el repositorio. Desde una consola, __git clone https://github.com/SebaRev1989/utn-pw-final__
2. El paso anterior creará un directorio "utn-pw-final", deben entrar en el mismo.
3. Ejecutar el comando __npm install__
4. Definir la base de datos y cargar los datos de prueba ficticios contenidos en el script. Reemplazar user por su usuario, por defecto funciona con root root.
	* Si es la primera vez, __mysql -u [user] -p__, __create database progweb;__, __exit__.
	* Si la base de datos está creada, rellenarla con el comando __mysql -u [user] -p progweb < progweb.sql__.

## Puesta en funcionamiento
1. Una vez que se instalaron todas las dependecias, ejecutar el comando __npm start__
2. Desde una navegador entrar a __http://localhost:3000__ (en caso de cambiar el puerto, reemplazar el puerto 3000 por el seleccionado).
