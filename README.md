* Step 1: npm init
* Step 2: sequelize init <!-- add config.js file, model folde, migrations folder, seeders folder-->
<!-- yarn sequelize-cli model:generate --name Role --attributes key:integer,title:string -->
<!-- yarn sequelize-cli seed:generate --name Role -->
<!-- yarn sequelize-cli model:generate --name Status --attributes key:integer,title:string -->
<!-- yarn sequelize-cli seed:generate --name Status -->
<!-- yarn sequelize-cli model:generate --name MasterData --attributes name:string,types:string,displayName:string -->
<!-- yarn sequelize-cli model:generate --name User --attributes image:string,name:string,email:string,password:string,mobile:string -->

<!-- yarn db:create -->
<!-- yarn db:migrate -->
<!-- yarn db:seeds -->
* Step 3: git init <!-- to initialize a git repo-->


# Packages used
- bcryptjs = hashing and salting passwords.
- http-status = to show the status of the request by HTTP status codes.
- express = web framework for creating RESTful APIs.
- dotenv = module for loading environment variables from a .env file.
- jsonwebtoken = module for generating and verifying JSON Web Tokens.
- sequelize = ORM for interacting with databases.
- nodemon = development tool for automatically restarting the server.
- multer = middleware for handling form-data responses.