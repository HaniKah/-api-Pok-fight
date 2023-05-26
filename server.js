const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./dbinit");

require("colors");
require("dotenv").config();

// PROCESS PORT
const PORT = process.env.PORT || 4000;

// REQUIRE POKEMON ROUTE
const pokemons = require("./routes/pokemons");

// REQUIRE USER ROUTE
const users = require("./routes/users");

connectDB();

// MIDDLEWARES
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// POKEMON ROUTES
app.use("/api/pokemons", pokemons);

// USER ROUTES
app.use("/api/users", users);

app.get("/", (req, res, next) => {
  res.send("welcome to my API");
});

app.listen(PORT, () => {
  console.log(`listening to PORT ${PORT}`);
});
