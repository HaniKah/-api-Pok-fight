const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

const pokemonSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
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
  moves: {
    type: Array,
    required: true,
  },
  base_experience: {
    type: String,
    required: true,
  },
  height: {
    type: String,
  },
  types: {
    type: Array,
    required: true,
  },
  weight: {
    type: String,
  },
});

pokemonSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("Pokemon_v2", pokemonSchema);
