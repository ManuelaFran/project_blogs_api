const express = require('express');
const loginRoute = require('./router/loginRoute');
const userRoute = require('./router/userRoute');
const categoriesRoute = require('./router/categoriesRoute');
const postRoute = require('./router/postRoute');

// ...

const app = express();

app.use(express.json());

app.use('/login', loginRoute);
app.use('/user', userRoute);
app.use('/categories', categoriesRoute);
app.use('/post', postRoute);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js!`
module.exports = app;
