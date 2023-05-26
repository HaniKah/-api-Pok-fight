const mongoose = require("mongoose");

const pokemonSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  stats: {
    type: Array,
    required: true,
  },
  front_default: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Pokemon", pokemonSchema);
