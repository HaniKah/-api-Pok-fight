require("colors");
require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./dbinit");
const pokemons = require("./routes/pokemons");

connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res, next) => {
  res.send("welcome to my API");
});

app.use("/pokemons", pokemons);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`listening to PORT ${PORT}`);
});
