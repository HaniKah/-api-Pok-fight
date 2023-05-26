const express = require("express");

const { createPokemons, deletePokemons } = require("../controllers/pokemons");
const api = express.Router();

api.route("/").post(createPokemons);

module.exports = api;
