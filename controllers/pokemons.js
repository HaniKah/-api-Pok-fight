const Pokemon = require("../schemas/Pokemons");

const createPokemons = async (req, res) => {
  try {
    const { id, name, stats, front_default } = req.body;
    const pokemon = await Pokemon.create({ id, name, stats, front_default });
    res.status(201).json({
      success: true,
      data: pokemon,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};

const deletePokemons = async (req, res) => {
  try {
    const { id } = req.params;
    const pokemon = await Pokemon.findByIdAndDelete(id);
    if (!pokemon) {
      res.status(404).json({
        success: false,
        msg: "pokemon is not deleted",
      });
    } else {
      res.status(200).json({
        success: true,
        msg: "pokemon is deleted",
      });
    }
  } catch (error) {}
};

module.exports = { createPokemons, deletePokemons };
