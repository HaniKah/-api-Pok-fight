const Users = require("../schemas/Users");

// FUNCTION TO CREATE NEW USER RECORD   --- ADD USER

const createNewUser = async (req, res) => {
    try {
        console.log("body:", req.body)
    const { user_name, email, password, coins, collections } = req.body;
    const user = await Users.create({ user_name, email, password, coins, collections });
    res.status(201).json({
        success: true,
        data: user,
    });
    } catch (error) {
    res.status(500).json({
        success: false,
        error,
    });
    }
};

// FUNCTION TO GET INFO OF A USER FROM OUR DB --- FETCH ONE

const getOneUser = async (req,res)=>{
    try {
        console.log("params:", req.params)
        const {id} = req.params
        const user = await Users.findById(id)
        if(user){
            res.status(200).json({
                success:true,
                data:user
            })
        }else{
            res.status(204).json({
                success:false,
                msg:("user is not find")
            })
        }
    } catch (error) {
        res.status(500).json({
            success:false,
            error,
        })
    }
}

// GET ALL USERS INFO FROM THE USER DB    --- FETCH ALL
const getAllUsers = async (req, res) => {
    try {
        const user = await Users.find()

        if (user.length) {
            res.status(200).json({success: true, data:user});
            
        }else{
            res.status(404).json({
                success:false,
                msg:"no users found"
   
            });
            }
        }catch (error) {
            res.status(500).json({
                error,
            });
        }
};


// UPDATE ONE USER INFO FROM THE USER DB   ---- UPDATE USER
const updateScore = async (req, res) => {
    try{
        const { coins, score } = req.body;
        const { id } = req.params;
        
        const player = await Users.findByIdAndUpdate(id, { score:score, coins:coins }, { new: true })
        if(!player){
            res.status(404).json({
                success:true,
                data:user
            })
        }else{
            res.status(200).json({
                success:true,
                msg:("Score Updated")
            })
            } 
    }
    catch (error) {
        res.status(500).json({
            error,
        });
    }
};
module.exports = {
    getOneUser,
    createNewUser, 
    getAllUsers,
    updateScore
};