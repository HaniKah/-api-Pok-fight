const mongoose = require("mongoose");
const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI);

  console.log(`mongoDb is connected ${conn.connection.name}`.bgYellow);
};

module.exports = connectDB;
