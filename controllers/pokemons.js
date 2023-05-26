const Pokemons = require("../schemas/Pokemons");

// // FUNCTION TO CREATE NEW POKEMON RECORD   --- ADD
// const createPokemons = async (req, res) => {
//   try {
//     const { id, name, stats, front_default } = req.body;
//     const pokemon = await Pokemon.create({ id, name, stats, front_default });
//     res.status(201).json({
//       success: true,
//       data: pokemon,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       error,
//     });
//   }
// };

// // FUNCTION TO DELETE A POKEMON RECORD  --- DELETE
// const deletePokemons = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const pokemon = await Pokemon.findByIdAndDelete(id);
//     if (!pokemon) {
//       res.status(404).json({
//         success: false,
//         msg: "pokemon is not deleted",
//       });
//     } else {
//       res.status(200).json({
//         success: true,
//         msg: "pokemon is deleted",
//       });
//     }
//   } catch (error) {}
// };

// FUNCTION TO GET ALL THE POKEMON FROM OUR DB  ---- FETCH ALL
const getAllPokemons = async (req, res) => {
  try {
    const pokemons = await Pokemons.find()
    res.status(200).json({success: true, data: pokemons})
    // if (!pokemons.length) {
    //   res.status(204).json({
    //     success:false,
    //     msg:"no data yet"
    //   })

    //   }else{
    //     res.status(200).json({
    //       success: true,
    //       msg: "Fetch Successfull!",
    //       data: pokemons
    //       })

    //   }
    }
  catch (error) {
    res.status(500).json({error}) 
  }
  }

// FUNCTION TO GET 1 POKEMON FROM OUR DB --- FETCH ONE

const getOnePokemon = async (req,res) => {
  try {
    const { id } = req.params;
    const pokemon = await Pokemons.findById(id)
    if (pokemon) {
      return res.status(200).json({
        success:true,
        data:pokemon
      })

  }else{
    res.status(404).json({
      success:false,
      msg:"pokemon not found"
    })
  }
}
  catch (error) {
    res.status(500).json({error})
  }
}
module.exports = { 
  getAllPokemons,
  getOnePokemon
};
