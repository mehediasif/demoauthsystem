# demoAuthSystem in nodejs and mongoose 
to use this template as a starting point for a login System
- install nodejs
- install mongodb and mongodb compass
- Download Postman for desktop

use your favorite code-editor and clone this repository or just download the files 
then go to the project directory and run
`npm install`
after downloading the dependencies and running in a developer environment run
`npm i -D nodemon`
then do following:
1. run the mongo.exe file from C:\Program Files\MongoDB\Server\5.0\bin
2. open MongoDB compass and connect a new Connection
3. Copy your path from running mongo.exe(usually its  mongodb://127.0.0.1:27017)
4.Replace your mongo url/uri with my uri in .env file in "MONGODB_URL"
5.from terminal go to the directory and run `npm run dev`
6.If everything was good you will get a message "Server is running in port ...."
7.use a browser and go to `http://localhost:{your PORT or 4000}`
8.open postman and you can try these routes:
	- `http://localhost:4000/`
	- `http://localhost:4000/register` to register a user using firstname,lastname,email&password
	- `http://localhost:4000/login` use a registered email & password to verify a user
	- ` http://localhost:4000/dashboard` to connect a dashboard
9.Modify the middleware to modify the roles of user(example:admin/moderator/member)


