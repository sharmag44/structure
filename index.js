//express code
const express = require('express');
const app = express();
const port = 3000;


//body parser code
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use("./src/Models/connection");


app.listen(port, () => console.log(`listening on port ${port}!`));