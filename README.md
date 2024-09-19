## courses
>- https://app.pluralsight.com/library/courses/angular-owasp-secure-coding/table-of-contents
>- Secure Coding in Angular
>- owasp-prg/#

### configuración bootstrap nueva
>- https://www.techiediaries.com/angular-bootstrap/
>- https://www.tutsmake.com/angular-17-install-add-bootstrap-5-example/#google_vignette

### texto
>- proyecto api express con cors y orm conectado a sql server usando javascript
>- proyecto api express con cors, jwt token y orm conectado a sql server usando javascript y curls
>- implementar equivalente a signalr en api express y cliente en index.html
>- enviar un correo por express
>- socket.io en mi api express que usa sequelize y index.html


### api express implementando socket.io
>- npm install express socket.io
>- npm install socket.io


### pruebas curls
>- curl -X POST http://localhost:9000/api/users -H "Content-Type: application/json" -d '{"name":"Luis","email":"luis@example.com","password":"123456"}'
>- curl -X GET http://localhost:9000/api/users -H "Content-Type: application/json"
>- curl -X GET http://localhost:9000/api/users/1 -H "Content-Type: application/json"
>- curl -X POST http://localhost:9000/api/register -H "Content-Type: application/json" -d '{"name":"mario","email":"mario@example.com","password":"123456"}'
>- {"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiZW1haWwiOiJqb3NlQGV4YW1wbGUuY29tIiwiaWF0IjoxNzI1MDY0MDEyLCJleHAiOjE3MjUwNjc2MTJ9.TyO7KIuPJlQEktA1rqtUYy5oF7_xSBXVUsS9BRAAbjo"}
>- curl -X POST http://localhost:9000/api/login -H "Content-Type: application/json" -d '{"email":"jose@example.com","password":"123456"}'
>- curl -X GET http://localhost:9000/api/perfil -H "Authorization: Bearer [tu_token]"
>- curl -X GET http://localhost:9000/api/perfil -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywiZW1haWwiOiJtYXJpb0BleGFtcGxlLmNvbSIsImlhdCI6MTcyNTIyNzU4NiwiZXhwIjoxNzI1MjMxMTg2fQ.s026W5i6DLYe4z_RySBVMzw_8Et85qH5wVorPUHySOM"
>- curl -X GET http://localhost:9000/api/users -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywiZW1haWwiOiJtYXJpb0BleGFtcGxlLmNvbSIsImlhdCI6MTcyNTIyNzU4NiwiZXhwIjoxNzI1MjMxMTg2fQ.s026W5i6DLYe4z_RySBVMzw_8Et85qH5wVorPUHySOM"

### paquetes a instalar
>- npm install express cors sequelize tedious jsonwebtoken bcryptjs
>- npm install --save-dev sequelize-cli

### conectar express a mysql
>- npm install express sequelize mysql2
>- npm install --save-dev typescript @types/express @types/node ts-node-dev
>- npx tsc --init
>- npx sequelize-cli init
>- npx sequelize-cli migration:generate --name migra-3

### curl post
>- curl -X POST http://localhost:9000/api/users -H "Content-Type: application/json" -d '{"name":"mike","email":"mike@example.com"}'


### compilar aplicación
>- npx tsc --init
>- npx tsc

### crear seeders
>- npx sequelize-cli seed:generate --name demo-user
>- insertara data
>- npx sequelize-cli db:seed:all
>- borrara data
>- npx sequelize-cli db:seed:undo

### para trabajar base de datos especifica configurar
>- config/config.json
>- db.js
>- models/User.js
>- migrations/20240830165721-create-users-table2.js
>- .env


### comandos
>- npx sequelize-cli init
>- npx sequelize-cli migration:generate --name migra-1
>- npx sequelize-cli db:migrate
>- npx sequelize-cli db:migrate:status
>- npx sequelize-cli db:migrate:undo
>- npx sequelize-cli db:migrate

# comandos instalar
>- npm install sequelize sequelize-cli tedious
>- npm install --save-dev typescript @types/node @types/express
>- npm install express sequelize tedious cors
>- npm install --save-dev typescript @types/node @types/express @types/cors sequelize-cli


# Crear una nueva migración
npx sequelize-cli migration:generate --name create-users-table

# Editar el archivo generado en `migrations/`

# Aplicar las migraciones a la base de datos SQL Server
npx sequelize-cli db:migrate

# Verificar el estado de las migraciones
npx sequelize-cli db:migrate:status

# Revertir la última migración
npx sequelize-cli db:migrate:undo
