## courses
>- https://app.pluralsight.com/library/courses/angular-owasp-secure-coding/table-of-contents
>- Secure Coding in Angular
>- owasp-prg/#

### configuración bootstrap nueva
>- https://www.techiediaries.com/angular-bootstrap/
>- https://www.tutsmake.com/angular-17-install-add-bootstrap-5-example/#google_vignette

### texto
>- proyecto api express con cors y orm conectado a sql server usando javascript


### pruebas curls
>- curl -X POST http://localhost:9000/api/users -H "Content-Type: application/json" -d '{"name":"Luis","email":"luis@example.com","password":"123456"}'
>- curl -X GET http://localhost:9000/api/users -H "Content-Type: application/json"
>- curl -X GET http://localhost:9000/api/users/1 -H "Content-Type: application/json"


###
>- npm install --save sequelize sequelize-typescript @types/sequelize
>- npm list sequelize @types/sequelize typescript
>- npm install sequelize@latest @types/sequelize@latest typescript@latest
>- npm install tedious
>- npm uninstall sequelize
>- npm install sequelize
>- npm cache clean --force
>- npm install
>- npm install sequelize@latest @types/sequelize@latest typescript@latest


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

>- npm install --save-dev sequelize-cli
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


### configurar proyecto express
>- npm install body-parser core-js cors express
>- npm install --save-dev ts-node
>- npm i -D typescript @types/express @types/node

### depurar con la extensión
>- JavaScript Debugger (Nightly)


### error TypeScript compiler options "target" and "useDefineForClassFields" are set to "ES2022" and "false" respectively by the Angular CLI.
>- https://stackoverflow.com/questions/75047760/typescript-target-warnings-after-angular-15-update
