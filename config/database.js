const mongoose = require("mongoose");

const database = async () => {
   try {
      await mongoose.connect("mongodb+srv://patelrushil1510:v6sXd2YK3IwYpuZn@cluster0.9kwd6a2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
      console.log("Database connected..!")
   } catch (error) {
      console.log(error);
   }
}
module.exports = database

// v6sXd2YK3IwYpuZn