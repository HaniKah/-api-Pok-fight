const express = require("express");

const { getOnePokemon, getAllPokemons } = require("../controllers/pokemons");

const api = express.Router();

// DEFAULT ROUTE   ---- PATH TO DISPLAY ALL POKEMON
api.route("/").get(getAllPokemons);

// ROUTE BY ID ----- PATH TO DISPLAY A SINGLE POKEMON BY ID
api.route("/:id").get(getOnePokemon);

module.exports = api;
