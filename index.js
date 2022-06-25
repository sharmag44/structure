
const express = require("express");
const cors = require("cors");
const db = require("./models");
const app = express();
const port = process.env.PORT || 3000;
const corsOption = {
    origin: "localhost:3000",
};

app.use(cors(corsOption));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.json({ message: "Hello World" });
});
db.sequelize.sync();
require("./routes/routes")(app);

app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
});