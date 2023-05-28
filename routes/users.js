const express = require("express");

const {
  createNewUser,
  getOneUser,
  getAllUsers,
  updateScore,
  checkUser,
} = require("../controllers/users");

const api = express.Router();

// DEFAULT ROUTE   ---- PATH TO DISPLAY create a new user

api.route("/").post(createNewUser);

// DEFAULT ROUTE   ---- PATH TO DISPLAY all users

api.route("/leaderboard").get(getAllUsers);

// DEFAULT ROUTE   ---- PATH TO DISPLAY one user

api.route("/:id").get(getOneUser);

// DEFAULT ROUTE   ---- PATH TO DISPLAY updated score

api.route("/arena/:id").put(updateScore);

// DEFAULT ROUTE   ---- PATH TO check LOGIN

api.route("/login").post(checkUser);

module.exports = api;
