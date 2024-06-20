const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connection_url = 'mongodb://127.0.0.1:27017/school-mng';

mongoose.connect(connection_url, {
  // useNewUrlParser: true, // Note: Remove this option to avoid the warning
  // useUnifiedTopology: true, // Note: Remove this option to avoid the warning
});

mongoose.connection.once("open", () => {
  console.log("MongoDB connected successfully");
});

module.exports = mongoose;
