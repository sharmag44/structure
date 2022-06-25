//express code
const express = require('express');
const app = express();
const cors = require("cors");
const corsOption = {
    origin: "localhost:3000",
};

app.use(cors(corsOption));
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.listen(port, () => console.log(`listening on port ${port}!`));