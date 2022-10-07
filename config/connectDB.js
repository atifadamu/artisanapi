const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose
    .connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("database connected");
    })
    .catch(() => {
      console.log("OOPS!! couln't connect");
    });
};

module.exports = connectDB;
